import { Inject, Injectable } from '@nestjs/common';
import { IConnectionService } from '../connection.service.interface';
import { UserConnectionVo } from 'src/infra/data/typeorm/vo/user_connection.vo';
import { USER_CONNECTION_REPOSITORY } from 'src/infra/data/interactor/repository/ioc';
import { IUserConnectionRepository } from 'src/domain/interactor/data/repository/user_connection.repository.interface';

@Injectable()
export class ConnectionServiceImpl implements IConnectionService {
  constructor(
    @Inject(USER_CONNECTION_REPOSITORY)
    private readonly userConnectionRepository: IUserConnectionRepository,
  ) {}

  async getSent(userId: number): Promise<UserConnectionVo[]> {
    return await this.userConnectionRepository.findSent(userId);
  }
}
