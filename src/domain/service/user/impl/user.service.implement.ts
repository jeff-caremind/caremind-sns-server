import { Inject, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { IUserService } from '../user.service.interface';
import {
  FEED_REPOSITORY,
  USER_REPOSITORY,
} from 'src/infra/data/interactor/repository/ioc';
import { IUserRepository } from 'src/domain/interactor/data/repository/user.repository.interface';
import { IFeedRepository } from 'src/domain/interactor/data/repository/feed.repository.interface';

import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';
import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';

import * as bcrypt from 'bcrypt';

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

  async signUp(userData: {
    name?: string;
    email: string;
    password: string;
  }): Promise<void> {
    // 이메일 : ., @ 포함 필수, 2자 이상
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (!emailRegex.test(userData.email)) {
      throw new HttpException('KEY ERROR(email)', HttpStatus.BAD_REQUEST);
    }

    // 비밀번호 : 숫자, 소문자, 대문자, 특수문자, 8자 이상
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/;
    if (!passwordRegex.test(userData.password)) {
      throw new HttpException('KEY ERROR(password)', HttpStatus.BAD_REQUEST);
    }

    const encodedPassword = await bcrypt.hash(userData.password, 10);

    userData.password = encodedPassword;

    console.log('userData::::::::::::', userData);

    return await this.userRepository.createUser(userData);
  }
}
