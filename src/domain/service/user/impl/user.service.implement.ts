import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JwtService } from '@nestjs/jwt';

import { IUserService } from '../user.service.interface';
import {
  FEED_REPOSITORY,
  USER_REPOSITORY,
} from 'src/infra/data/interactor/repository/ioc';
import { IFeedRepository } from 'src/domain/interactor/data/repository/feed.repository.interface';
import { IUserRepository } from 'src/domain/interactor/data/repository/user.repository.interface';
import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';
import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';
import { LoginDto } from 'src/domain/service/dto/user.dto';

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

  async login(email: string, password: string): Promise<LoginDto> {
    if (!email) throw new HttpException('KEY_ERROR', HttpStatus.BAD_REQUEST);
    if (!password) throw new HttpException('KEY_ERROR', HttpStatus.BAD_REQUEST);
    const user = await this.userRepository.findOneByEmail(email);
    if (!user) throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    const { password: hashed, ...userInfo } = user;
    const comparison = await bcrypt.compare(password, hashed);
    if (!comparison)
      throw new HttpException('INVALID_PASSWORD', HttpStatus.BAD_REQUEST);
    const token = await this.JwtService.signAsync({
      aud: userInfo.id,
    });
    this.userRepository.findOneByEmail(email);
    return { token: token, user: userInfo };
  }
}
