import { Provider } from '@nestjs/common';
import { FeedServiceImpl } from '../feed/impl/feed.service.implement';
import { IFeedService } from '../feed/feed.service.interface';
import { IUserService } from '../user/user.service.interface';
import { UserServiceImpl } from '../user/impl/user.service.implement';

export const FEED_SERVICE = Symbol.for('FEED_SERVICE');
export const FeedService: Provider<IFeedService> = {
  provide: FEED_SERVICE,
  useClass: FeedServiceImpl,
};

export const USER_SERVICE = Symbol.for('USER_SERVICE');
export const UserService: Provider<IUserService> = {
  provide: USER_SERVICE,
  useClass: UserServiceImpl,
};
