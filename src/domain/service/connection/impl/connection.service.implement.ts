import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IConnectionService } from '../connection.service.interface';
import { UserConnectionVo } from 'src/infra/data/typeorm/vo/user_connection.vo';
import {
  USER_CONNECTION_REPOSITORY,
  USER_REPOSITORY,
} from 'src/infra/data/interactor/repository/ioc';
import { IUserConnectionRepository } from 'src/domain/interactor/data/repository/user_connection.repository.interface';
import { IUserRepository } from 'src/domain/interactor/data/repository/user.repository.interface';
import { ConnectionsDto } from '../../dto/connection.dto';

@Injectable()
export class ConnectionServiceImpl implements IConnectionService {
  constructor(
    @Inject(USER_CONNECTION_REPOSITORY)
    private readonly userConnectionRepository: IUserConnectionRepository,
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository,
  ) {}

  async getConnections(userId: number): Promise<ConnectionsDto> {
    const user = await this.userRepository.findOneById(userId);
    if (!user) throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    const rawConnections =
      await this.userConnectionRepository.findConnections(userId);
    const connections: ConnectionsDto = rawConnections.map(
      (connection: UserConnectionVo) => {
        if (connection.connectedUser.id === userId)
          connection.connectedUser = connection.user;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { user, ...rest } = connection;
        return rest;
      },
    );
    return connections;
  }
}
