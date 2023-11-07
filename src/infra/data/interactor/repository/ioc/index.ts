import { Provider } from '@nestjs/common';

import { IFeedRepository } from 'src/domain/interactor/data/repository/feed.repository.interface';
import { IUserRepository } from 'src/domain/interactor/data/repository/user.repository.interface';
import { IProfileRepository } from 'src/domain/interactor/data/repository/profile.repository.interface';
import { FeedRepositoryImpl } from '../feed/feed.repository.implement';
import { UserRepositoryImpl } from '../user/user.repository.implement';
import { ProfileRepositoryImpl } from '../profile/profile.repository.implement';

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

export const PROFILE_REPOSITORY = Symbol.for('PROFILE_REPOSITORY');
export const ProfileRepository: Provider<IProfileRepository> = {
  provide: PROFILE_REPOSITORY,
  useClass: ProfileRepositoryImpl,
};
