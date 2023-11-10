import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IConnectionService } from '../connection.service.interface';
import {
  USER_CONNECTION_REPOSITORY,
  USER_REPOSITORY,
} from 'src/infra/data/interactor/repository/ioc';
import { IUserConnectionRepository } from 'src/domain/interactor/data/repository/user_connection.repository.interface';
import { ConnectionDto } from '../../dto/connection.dto';
import { IUserRepository } from 'src/domain/interactor/data/repository/user.repository.interface';

@Injectable()
export class ConnectionServiceImpl implements IConnectionService {
  constructor(
    @Inject(USER_CONNECTION_REPOSITORY)
    private readonly userConnectionRepository: IUserConnectionRepository,
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
  ) {}

  async deleteConnection(connectionDto: ConnectionDto): Promise<void> {
    const { userId, connectionId } = connectionDto;
    const user = await this.userRepository.findOneById(userId);
    if (!user) throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    const connection =
      await this.userConnectionRepository.findOneWithUserById(connectionId);
    if (!connection)
      throw new HttpException('CONTENT_NOT_FOUND', HttpStatus.NOT_FOUND);
    if (connection.user.id !== userId)
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    return await this.userConnectionRepository.remove(connection);
  }
}