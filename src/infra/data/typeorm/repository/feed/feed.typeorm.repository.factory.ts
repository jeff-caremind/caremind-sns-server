import { HttpException, HttpStatus } from '@nestjs/common';
import { DataSource, FindManyOptions, Like, Repository } from 'typeorm';

import { TypeormRepositoryFactory } from '../typeorm.repository.factory';
import { FeedVo } from '../../vo/feed.vo';
import { FeedQueryDto, SortParam } from 'src/domain/service/dto/feed.dto';
import { IFeedTypeormRepository } from 'src/infra/data/interactor/repository/feed/orm_interface/feed.typeorm.repository.interface';

export class FeedTypeormRepositoryFactory extends TypeormRepositoryFactory<FeedVo> {
  constructor() {
    super();
  }

  getRepository(dataSource: DataSource): IFeedTypeormRepository {
    const repository = dataSource.getRepository(this.entity);
    const feedTypeormRepository = this.extendQueryOptionBuilder(repository);
    return feedTypeormRepository;
  }

  extendQueryOptionBuilder(
    repository: Repository<FeedVo>,
  ): IFeedTypeormRepository {
    const feedTypeormRepository = repository.extend({
      queryOptionsBuilder(queryDto: FeedQueryDto) {
        const { sort, search, tag, offset, limit } = queryDto;
        const queryOptions: FindManyOptions<FeedVo> = {};
        if (sort) this.getSortOptions(sort, queryOptions);
        if (search) this.getSearchOptions(search, queryOptions);
        if (limit) queryOptions.take = limit;
        if (offset) queryOptions.skip = offset;
        if (tag) this.getTagOptions(tag, queryOptions);
        return queryOptions;
      },
    });
    return feedTypeormRepository;
  }

  getSortOptions(sort: SortParam, queryOptions: FindManyOptions<FeedVo>) {
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

  getSearchOptions(search: string, queryOptions: FindManyOptions<FeedVo>) {
    queryOptions.where = {
      ...queryOptions.where,
      content: Like(`%${search}%`),
    };
    return queryOptions;
  }

  getTagOptions(tag: string, queryOptions: FindManyOptions<FeedVo>) {
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
}

// export function FeedTypeormRepositoryFactoryFunction(dataSource: DataSource) {
//   const repository = dataSource.getRepository(FeedVo).extend({
//     queryOptionsBuilder(queryDto: FeedQueryDto) {
//       const { sort, search, tag, offset, limit } = queryDto;
//       const queryOptions: FindManyOptions<FeedVo> = {};
//       if (sort) getSortOptions(sort, queryOptions);
//       if (search) getSearchOptions(search, queryOptions);
//       if (limit) queryOptions.take = limit;
//       if (offset) queryOptions.skip = offset;
//       if (tag) getTagOptions(tag, queryOptions);
//       return queryOptions;
//     },
//   });
//   return repository;
// }

// function getSortOptions(
//   sort: SortParam,
//   queryOptions: FindManyOptions<FeedVo>,
// ) {
//   switch (sort) {
//     case 'recent': {
//       queryOptions.order = {
//         createdAt: 'DESC',
//       };
//       break;
//     }
//     case 'trending': {
//       // TODO: change logic to get trending feeds
//       queryOptions.order = {
//         createdAt: 'DESC',
//       };
//       break;
//     }
//     default: {
//       throw new HttpException('INVALID_INPUT', HttpStatus.BAD_REQUEST);
//     }
//   }
//   return queryOptions;
// }

// function getSearchOptions(
//   search: string,
//   queryOptions: FindManyOptions<FeedVo>,
// ) {
//   queryOptions.where = {
//     ...queryOptions.where,
//     content: Like(`%${search}%`),
//   };
//   return queryOptions;
// }

// function getTagOptions(tag: string, queryOptions: FindManyOptions<FeedVo>) {
//   queryOptions.where = {
//     ...queryOptions.where,
//     feedTags: {
//       tag: {
//         tag: tag,
//       },
//     },
//   };
//   return queryOptions;
// }
