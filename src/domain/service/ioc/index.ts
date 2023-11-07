import { Provider } from '@nestjs/common';

import { FeedServiceImpl } from '../feed/impl/feed.service.implement';
import { UserServiceImpl } from '../user/impl/user.service.implement';
import { ProfileServiceImpl } from '../profile/impl/profile.service.implement';
import { IFeedService } from '../feed/feed.service.interface';
import { IUserService } from '../user/user.service.interface';
import { IProfileService } from '../profile/profile.service.interface';

export const FEED_SERVICE = Symbol.for('FEED_SERVICE');
export const FeedService: Provider<IFeedService> = {
  provide: FEED_SERVICE,
  useClass: FeedServiceImpl,
};

export const USER_SERVICE = Symbol.for('USER_SERVICE');
export const UserService: Provider<IUserService> = {
  // user.module에 provider가 지정되어 있다.(UserService)  // UserService의 타입은 Provider
  provide: USER_SERVICE, // 타입이 symbol이 되고 (= 실제 심볼일 뿐)   //  **provide : 호출하는 것(inject할 때)**
  useClass: UserServiceImpl, // provide(USER_SERVICE)가 호출될 때 사용되는 클래스가 UserserviceImpl다. / **symbol 호출시 실제 들어가는 값**
};

// UserService: Provider <어떤 것으로 Provider 할 것인가  /  IUserService와 같은 형태로>

export const PROFILE_SERVICE = Symbol.for('PROFILE_SERVICE');
export const ProfileService: Provider<IProfileService> = {
  provide: PROFILE_SERVICE,
  useClass: ProfileServiceImpl,
};
