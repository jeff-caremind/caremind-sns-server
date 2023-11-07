import { DataSource, Repository } from 'typeorm';
import { FeedVo } from '../../vo/feed.vo';
import { DATA_SOURCE } from '../../config/typeorm.config';
import { Provider } from '@nestjs/common';
import { UserVo } from '../../vo/user.vo';
import { FeedLikeVo } from '../../vo/feed_like.vo';

export const FEED_TYPEORM_REPOSITORY = Symbol.for('FEED_TYPEORM_REPOSITORY');
export const FeedTypeormRepository: Provider<Repository<FeedVo>> = {
  provide: FEED_TYPEORM_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(FeedVo),
  inject: [DATA_SOURCE],
};

export const USER_TYPEORM_REPOSITORY = Symbol.for('USER_TYPEORM_REPOSITORY');
export const UserTypeormRepository: Provider<Repository<UserVo>> = {
  provide: USER_TYPEORM_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(UserVo), // useFactory : 함수공장(화살표함수처럼), dataSource라는 키(DataSource라는 타입)를 넣으면 => 뒤의 함수를 실행
  inject: [DATA_SOURCE],
};

export const FEED_LIKE_TYPEORM_REPOSITORY = Symbol.for(
  'FEED_LIKE_TYPEORM_REPOSITORY',
);
export const FeedLikeTypeormRepository: Provider<Repository<FeedLikeVo>> = {
  provide: FEED_LIKE_TYPEORM_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(FeedLikeVo),
  inject: [DATA_SOURCE],
};
