import { HttpException, HttpStatus } from '@nestjs/common';
import {
  DataSource,
  FindManyOptions,
  FindOptionsRelations,
  FindOptionsSelect,
  Like,
} from 'typeorm';

import { IFeedTypeormRepository } from 'src/infra/data/interactor/repository/feed/orm_interface/feed.typeorm.repository.interface';
import { FeedVo } from '../../../vo/feed.vo';
import { FeedQueryDto, SortParam } from 'src/domain/service/dto/feed.dto';

export function FeedTypeormRepositoryFactory(
  dataSource: DataSource,
): IFeedTypeormRepository {
  const repository = dataSource.getRepository(FeedVo);
  const feedRepository = repository.extend({
    queryOptionBuilder: queryOptionBuilder,
    findWithFeedQuery: findWithFeedQuery,
    findOneWithRelationsById: findOneWithRelationsById,
  });
  return feedRepository;
}

async function findWithFeedQuery(queryDto: FeedQueryDto) {
  const queryOptions = this.queryOptionBuilder(queryDto);
  return await this.find({
    relations: feedFullRelations,
    select: feedFullRelationsSelect,
    ...queryOptions,
  });
}

async function findOneWithRelationsById(feedId: number) {
  const [feed] = await this.find({
    where: { id: feedId },
    relations: feedFullRelations,
    select: feedFullRelationsSelect,
  });
  return feed;
}

function queryOptionBuilder(queryDto: FeedQueryDto): FindManyOptions<FeedVo> {
  const { sort, search, tag, offset, limit } = queryDto;
  const queryOptions: FindManyOptions<FeedVo> = {};
  if (sort) getSortOptions(sort, queryOptions);
  if (search) getSearchOptions(search, queryOptions);
  if (limit) queryOptions.take = limit;
  if (offset) queryOptions.skip = offset;
  if (tag) getTagOptions(tag, queryOptions);
  return queryOptions;
}

function getSortOptions(
  sort: SortParam,
  queryOptions: FindManyOptions<FeedVo>,
) {
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
      throw new HttpException('INVALID_INPUT', HttpStatus.BAD_REQUEST);
    }
  }
  return queryOptions;
}

function getSearchOptions(
  search: string,
  queryOptions: FindManyOptions<FeedVo>,
) {
  queryOptions.where = {
    ...queryOptions.where,
    content: Like(`%${search}%`),
  };
  return queryOptions;
}

function getTagOptions(tag: string, queryOptions: FindManyOptions<FeedVo>) {
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

const feedFullRelations: FindOptionsRelations<FeedVo> = {
  author: true,
  likes: true,
  images: true,
  video: true,
  comments: {
    commenter: true,
  },
};

const feedFullRelationsSelect: FindOptionsSelect<FeedVo> = {
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
