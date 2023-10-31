import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from '../user.service.interface';
import {
  FEED_REPOSITORY,
  USER_REPOSITORY,
} from 'src/infra/data/interactor/repository/ioc';
import {
  IFeedRepository,
  IUserRepository,
} from 'src/domain/interactor/data/repository/feed.repository.inteface';
import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';
import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';

@Injectable()
export class UserServiceImpl implements IUserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
    @Inject(FEED_REPOSITORY) private readonly feedRepository: IFeedRepository,
  ) {}

  async getAll(): Promise<UserVo[]> {
    return await this.userRepository.findAll();
  }

  async getFeedsBy(): Promise<FeedVo[]> {
    return await this.feedRepository.findAll();
  }
}
