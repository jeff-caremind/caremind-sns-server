import { Inject, Injectable } from '@nestjs/common';
import { IConnectionService } from '../connection.service.interface';
import { IUserConnectionRepository } from 'src/domain/interactor/data/repository/user_connection.repository.interface';
import { USER_CONNECTION_REPOSITORY } from 'src/infra/data/interactor/repository/ioc';
import { ConnectionDto } from '../../dto/connection.dto';

@Injectable()
export class UserConnectionServiceImpl implements IConnectionService {
  constructor(
    @Inject(USER_CONNECTION_REPOSITORY)
    private readonly userConnectionRepository: IUserConnectionRepository,
  ) {}

  async updateConnection(connectionDto: ConnectionDto): Promise<void> {
    return;
  }
}
