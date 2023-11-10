import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IConnectionService } from '../connection.service.interface';
import { UserConnectionVo } from 'src/infra/data/typeorm/vo/user_connection.vo';
import {
  USER_CONNECTION_REPOSITORY,
  USER_REPOSITORY,
} from 'src/infra/data/interactor/repository/ioc';
import { IUserConnectionRepository } from 'src/domain/interactor/data/repository/user_connection.repository.interface';
import { IUserRepository } from 'src/domain/interactor/data/repository/user.repository.interface';

@Injectable()
export class ConnectionServiceImpl implements IConnectionService {
  constructor(
    @Inject(USER_CONNECTION_REPOSITORY)
    private readonly userConnectionRepository: IUserConnectionRepository,
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
  ) {}

  async getConnections(userId: number): Promise<UserConnectionVo[]> {
    const user = await this.userRepository.findOneById(userId);
    if (!user) throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    return this.userConnectionRepository.findConnections(userId);
  }
}
