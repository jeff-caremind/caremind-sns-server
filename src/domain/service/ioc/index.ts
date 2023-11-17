import { Provider } from '@nestjs/common';

import { IUserService } from '../user/user.service.interface';
import { IFeedService } from '../feed/feed.service.interface';
import { IProfileService } from '../profile/profile.service.interface';
import { IConnectionService } from '../connection/connection.service.interface';
import { ISecurityService } from '../security/security.service.interface';
import { UserServiceImpl } from '../user/impl/user.service.implement';
import { FeedServiceImpl } from '../feed/impl/feed.service.implement';
import { ProfileServiceImpl } from '../profile/impl/profile.service.implement';
import { ConnectionServiceImpl } from '../connection/impl/connection.service.implement';
import { SecurityServiceImpl } from '../security/impl/security.service.implement';

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

export const PROFILE_SERVICE = Symbol.for('PROFILE_SERVICE');
export const ProfileService: Provider<IProfileService> = {
  provide: PROFILE_SERVICE,
  useClass: ProfileServiceImpl,
};

export const CONNECTION_SERVICE = Symbol.for('CONNECTION_SERVICE');
export const ConnectionService: Provider<IConnectionService> = {
  provide: CONNECTION_SERVICE,
  useClass: ConnectionServiceImpl,
};

export const SECURITY_SERVICE = Symbol.for('SECURITY_SERVICE');
export const SecurityService: Provider<ISecurityService> = {
  provide: SECURITY_SERVICE,
  useClass: SecurityServiceImpl,
};
