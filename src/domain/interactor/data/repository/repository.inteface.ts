import { ObjectLiteral } from 'typeorm';

import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';
import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';

export interface IFeedRepository {
  findAll(): Promise<FeedVo[]>;
}

export interface IUserRepository {
  findAll(): Promise<UserVo[]>;
  findOneBy(where: ObjectLiteral): Promise<UserVo | null>;
}
