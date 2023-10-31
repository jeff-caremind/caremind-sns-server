import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JwtService } from '@nestjs/jwt';

import { IUserService } from '../user.service.interface';
import {
  FEED_REPOSITORY,
  USER_REPOSITORY,
} from 'src/infra/data/interactor/repository/ioc';
import {
  IFeedRepository,
  IUserRepository,
} from 'src/domain/interactor/data/repository/repository.inteface';
import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';
import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';

@Injectable()
export class UserServiceImpl implements IUserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
    @Inject(FEED_REPOSITORY) private readonly feedRepository: IFeedRepository,
    private readonly JwtService: JwtService,
  ) {}

  async getAll(): Promise<UserVo[]> {
    return await this.userRepository.findAll();
  }

  async getFeedsBy(): Promise<FeedVo[]> {
    return await this.feedRepository.findAll();
  }

  async login(email: string, password: string): Promise<any> {
    if (!email) throw new Error('KEY_ERROR');
    if (!password) throw new Error('KEY_ERROR');
    const user = await this.userRepository.findOneBy({ email: email });
    if (!user) throw new Error('USER_NOT_FOUND');
    const { password: hashed, ...userInfo } = user;
    const comparison = await bcrypt.compare(password, hashed);
    if (!comparison) throw new Error('INVALID_PASSWORD');
    const token = await this.JwtService.signAsync({
      aud: userInfo.id,
    });
    return { token: token, user: userInfo };
  }
}
