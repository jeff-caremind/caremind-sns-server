import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';

import { IConnectionService } from '../connection.service.interface';
import { IUserConnectionRepository } from 'src/domain/interactor/data/repository/user_connection.repository.interface';
import { IUserRepository } from 'src/domain/interactor/data/repository/user.repository.interface';
import {
  USER_CONNECTION_REPOSITORY,
  USER_REPOSITORY,
} from 'src/infra/data/interactor/repository/ioc';
import { UserConnectionVo } from 'src/infra/data/typeorm/vo/user_connection.vo';
import {
  ConnectionsDto,
  ConnectionDto,
  ConnectionWithUsersDto,
} from '../../dto/connection.dto';

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

  async getSent(userId: number): Promise<UserConnectionVo[]> {
    return await this.userConnectionRepository.findSent(userId);
  }

  async getReceived(userId: number): Promise<UserConnectionVo[]> {
    const connections =
      await this.userConnectionRepository.findReceived(userId);
    connections.forEach((item) => {
      item.connectedUser = item.user;
    });
    return connections;
  }

  async deleteConnection(connectionDto: ConnectionDto): Promise<void> {
    const { userId, connectionId } = connectionDto;
    const user = await this.userRepository.findOneById(userId);
    if (!user) throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    const connection =
      await this.userConnectionRepository.findOneWithRelationsById(
        connectionId,
      );
    if (!connection)
      throw new HttpException('CONTENT_NOT_FOUND', HttpStatus.NOT_FOUND);
    if (connection.user.id !== userId && connection.connectedUser.id !== userId)
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    await this.userConnectionRepository.remove(connection);
  }

  async acceptConnection(connectionDto: ConnectionDto): Promise<void> {
    const { userId, connectionId } = connectionDto;
    const user = await this.userRepository.findOneById(userId);
    if (!user) throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    const connection =
      await this.userConnectionRepository.findOneWithConnectedUserById(
        connectionId,
      );
    if (!connection)
      throw new HttpException('CONTENT_NOT_FOUND', HttpStatus.NOT_FOUND);
    if (connection.connectedUser.id !== user.id)
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    if (connection.isAccepted)
      throw new HttpException('DUPLICATE_REQUEST', HttpStatus.BAD_REQUEST);
    connection.isAccepted = true;
    await this.userConnectionRepository.update(connection);
  }

  async createConnection(connectionDto: ConnectionWithUsersDto): Promise<void> {
    const { userId, connectedUserId, message } = connectionDto;
    const follower = await this.userRepository.findOneById(userId);
    if (!follower)
      throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    const followee = await this.userRepository.findOneById(connectedUserId);
    if (!followee)
      throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    const newConnection = new UserConnectionVo();
    newConnection.user = follower;
    newConnection.connectedUser = followee;
    if (message) newConnection.message = message;
    return await this.userConnectionRepository.create(newConnection);
  }
}
