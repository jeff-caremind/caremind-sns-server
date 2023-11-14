import { FeedQueryDto } from 'src/domain/service/dto/feed.dto';
import { DataSource, FindManyOptions, Like } from 'typeorm';
import { FeedVo } from '../../vo/feed.vo';

export function FeedTypeormRepositoryFactory(dataSource: DataSource) {
  const repository = dataSource.getRepository(FeedVo);
  repository.extend({
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
    },
  });
  return repository;
}
