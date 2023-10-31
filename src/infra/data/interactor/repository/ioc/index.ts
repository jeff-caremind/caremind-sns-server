import { Provider } from '@nestjs/common';
import { FeedRepositoryImpl } from '../feed/feed.repository.implement';
import {
  IFeedRepository,
  IUserRepository,
} from 'src/domain/interactor/data/repository/feed.repository.inteface';
import { UserRepositoryImpl } from '../user/user.repository.implement';

export const FEED_REPOSITORY = Symbol.for('FEED_REPOSITORY');
export const FeedRepository: Provider<IFeedRepository> = {
  provide: FEED_REPOSITORY,
  useClass: FeedRepositoryImpl,
};

export const USER_REPOSITORY = Symbol.for('USER_REPOSITORY');
export const UserRepository: Provider<IUserRepository> = {
  provide: USER_REPOSITORY,
  useClass: UserRepositoryImpl,
};
