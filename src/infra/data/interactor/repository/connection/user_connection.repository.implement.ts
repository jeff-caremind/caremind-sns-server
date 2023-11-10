import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { IUserConnectionRepository } from 'src/domain/interactor/data/repository/user_connection.repository.interface';
import { USER_CONNECTION_TYPEORM_REPOSITORY } from 'src/infra/data/typeorm/repository/ioc';
import { UserConnectionVo } from 'src/infra/data/typeorm/vo/user_connection.vo';

@Injectable()
export class UserConnectionRepositoryImpl implements IUserConnectionRepository {
  constructor(
    @Inject(USER_CONNECTION_TYPEORM_REPOSITORY)
    private readonly userConnectionTypeormRepository: Repository<UserConnectionVo>,
  ) {}

  async findReceived(userId: number): Promise<UserConnectionVo[]> {
    return await this.userConnectionTypeormRepository.find({
      relations: {
        user: true,
      },
      where: {
        connectedUser: {
          id: userId,
        },
        isAccepted: false,
      },
      select: {
        user: {
          id: true,
          name: true,
          profileImage: true,
        },
      },
    });
  }
}
