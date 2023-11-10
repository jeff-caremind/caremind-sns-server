import { Inject, Injectable } from '@nestjs/common';
import {
  FindManyOptions,
  FindOptionsRelations,
  FindOptionsSelect,
  Like,
  Repository,
} from 'typeorm';

import { IFeedRepository } from 'src/domain/interactor/data/repository/feed.repository.interface';
import { FEED_TYPEORM_REPOSITORY } from 'src/infra/data/typeorm/repository/ioc';
import { FeedVo } from '../../../typeorm/vo/feed.vo';
import { FeedQueryDto } from 'src/domain/service/dto/feed.dto';

@Injectable()
export class FeedRepositoryImpl implements IFeedRepository {
  constructor(
    @Inject(FEED_TYPEORM_REPOSITORY)
    private readonly feedTypeormRepository: Repository<FeedVo>,
  ) {}

  async findAll(queryOptions: FindManyOptions<FeedVo>): Promise<FeedVo[]> {
    return this.feedTypeormRepository.find({
      relations: this.feedFullRelations,
      select: this.feedFullRelationsSelect,
      ...queryOptions,
    });
  }

  async findOneById(feedId: number): Promise<FeedVo | null> {
    return await this.feedTypeormRepository.findOneBy({ id: feedId });
  }

  async create(feed: FeedVo): Promise<void> {
    await this.feedTypeormRepository.save(feed);
  }

  async update(updatedFeed: FeedVo) {
    await this.feedTypeormRepository.save(updatedFeed);
  }

  async findOneWithAuthorById(feedId: number): Promise<FeedVo | null> {
    const [feed] = await this.feedTypeormRepository.find({
      relations: {
        author: true,
      },
      where: { id: feedId },
    });
    return feed;
  }

  async findOneWithRelationsById(feedId: number): Promise<FeedVo | null> {
    const [feed] = await this.feedTypeormRepository.find({
      where: { id: feedId },
      relations: this.feedFullRelations,
      select: this.feedFullRelationsSelect,
    });
    return feed;
  }

  async remove(feed: FeedVo) {
    await this.feedTypeormRepository.remove(feed);
  }

  private feedFullRelations: FindOptionsRelations<FeedVo> = {
    author: true,
    likes: true,
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

  queryOptionsBuilder(queryDto: FeedQueryDto) {
    const { sort, search, tag, offset, limit } = queryDto;
    const queryOptions: FindManyOptions<FeedVo> = {};
    if (sort) {
      switch (sort) {
        case 'recent': {
          queryOptions.order = {
            createdAt: 'DESC',
          };
          break;
        }
        case 'trending': {
          // TODO: change logic to get trending feeds
          queryOptions.order = {
            createdAt: 'DESC',
          };
          break;
        }
        default: {
          queryOptions.order = {
            createdAt: 'DESC',
          };
        }
      }
    }
    if (search) {
      queryOptions.where = {
        ...queryOptions.where,
        content: Like(`%${search}%`),
      };
    }
    if (limit) queryOptions.take = limit;
    if (offset) queryOptions.skip = offset;
    if (tag) {
      queryOptions.where = {
        ...queryOptions.where,
        feedTags: {
          tag: {
            tag: tag,
          },
        },
      };
    }
    return queryOptions;
  }
}
