import { HttpException, HttpStatus } from '@nestjs/common';
import {
  DataSource,
  FindManyOptions,
  FindOptionsRelations,
  FindOptionsSelect,
  Like,
  Repository,
} from 'typeorm';

import { IFeedTypeormRepository } from 'src/infra/data/interactor/repository/feed/orm_interface/feed.typeorm.repository.interface';
import { FeedVo } from '../../../vo/feed.vo';
import { FeedQueryDto, SortParam } from 'src/domain/service/dto/feed.dto';

export class FeedTypeormRepositoryFactory {
  static getRepository = (dataSource: DataSource): IFeedTypeormRepository => {
    const repository = dataSource.getRepository(FeedVo);
    const feedTypeormRepository =
      new FeedTypeormRepositoryFactory().extendRepository(repository);
    return feedTypeormRepository;
  };

  private extendRepository(
    repository: Repository<FeedVo>,
  ): IFeedTypeormRepository {
    return repository.extend({
      findWithFeedQuery: async (queryDto: FeedQueryDto) => {
        const queryOptions = this.queryOptionBuilder(queryDto);
        return await repository.find({
          relations: this.feedFullRelations,
          select: this.feedFullRelationsSelect,
          ...queryOptions,
        });
      },
      findOneWithRelationsById: async (feedId: number) => {
        const [feed] = await repository.find({
          where: { id: feedId },
          relations: this.feedFullRelations,
          select: this.feedFullRelationsSelect,
        });
        return feed;
      },
    });
  }

  private queryOptionBuilder(queryDto: FeedQueryDto) {
    const { sort, search, tag, offset, limit } = queryDto;
    const queryOptions: FindManyOptions<FeedVo> = {};
    if (sort) this.getSortOptions(sort, queryOptions);
    if (search) this.getSearchOptions(search, queryOptions);
    if (limit) queryOptions.take = limit;
    if (offset) queryOptions.skip = offset;
    if (tag) this.getTagOptions(tag, queryOptions);
    return queryOptions;
  }

  private getSortOptions(
    sort: SortParam,
    queryOptions: FindManyOptions<FeedVo>,
  ) {
    switch (sort) {
      case 'recent': {
        queryOptions.order = {
          createdAt: 'DESC',
          comments: {
            createdAt: 'DESC',
          },
        };
        break;
      }
      case 'trending': {
        // TODO: change logic to get trending feeds
        queryOptions.order = {
          createdAt: 'DESC',
          comments: {
            createdAt: 'DESC',
          },
        };
        break;
      }
      default: {
        throw new HttpException('INVALID_INPUT', HttpStatus.BAD_REQUEST);
      }
    }
    return queryOptions;
  }

  private getSearchOptions(
    search: string,
    queryOptions: FindManyOptions<FeedVo>,
  ) {
    queryOptions.where = {
      ...queryOptions.where,
      content: Like(`%${search}%`),
    };
    return queryOptions;
  }

  private getTagOptions(tag: string, queryOptions: FindManyOptions<FeedVo>) {
    queryOptions.where = {
      ...queryOptions.where,
      feedTags: {
        tag: {
          tag: tag,
        },
      },
    };
    return queryOptions;
  }

  private feedFullRelations: FindOptionsRelations<FeedVo> = {
    author: true,
    likes: {
      liker: true,
    },
    images: true,
    video: true,
    comments: {
      commenter: true,
    },
  };

  private feedFullRelationsSelect: FindOptionsSelect<FeedVo> = {
    author: {
      id: true,
      name: true,
      profileImage: true,
    },
    images: {
      id: true,
      imageUrl: true,
    },
    video: {
      id: true,
      videoUrl: true,
    },
    likes: {
      id: true,
      createdAt: true,
      liker: {
        id: true,
        name: true,
      },
    },
    comments: {
      id: true,
      content: true,
      createdAt: true,
      updatedAt: true,
      commenter: {
        id: true,
        name: true,
        profileImage: true,
      },
    },
  };
}
