import { Inject, Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { IConnectionService } from '../connection.service.interface';
import { IUserConnectionRepository } from 'src/domain/interactor/data/repository/user_connection.repository.interface';
import { IUserRepository } from 'src/domain/interactor/data/repository/user.repository.interface';
import {
  USER_CONNECTION_REPOSITORY,
  USER_REPOSITORY,
} from 'src/infra/data/interactor/repository/ioc';
import { UserConnectionVo } from 'src/infra/data/typeorm/vo/user_connection.vo';
import { ConnectionDto } from '../../dto/connection.dto';

@Injectable()
export class ConnectionServiceImpl implements IConnectionService {
  constructor(
    @Inject(USER_CONNECTION_REPOSITORY)
    private readonly userConnectionRepository: IUserConnectionRepository,
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
  ) {}

  async followUser(connectionDto: ConnectionDto): Promise<void> {
    const { followerId, followeeId, message } = connectionDto;
    const follower = await this.userRepository.findOneById(followerId);
    if (!follower)
      throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    const followee = await this.userRepository.findOneById(followeeId);
    if (!followee)
      throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    const newConnection = new UserConnectionVo();
    newConnection.follower = follower;
    newConnection.followee = followee;
    if (message) newConnection.message = message;
    return await this.userConnectionRepository.create(newConnection);
  }
}
