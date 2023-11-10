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

  async findConnections(userId: number): Promise<UserConnectionVo[]> {
    return await this.userConnectionTypeormRepository.find({
      relations: {
        user: true,
        connectedUser: true,
      },
      where: [
        {
          user: {
            id: userId,
          },
          isAccepted: true,
        },
        {
          connectedUser: {
            id: userId,
          },
          isAccepted: true,
        },
      ],
      select: {
        connectedUser: {
          id: true,
          name: true,
          profileImage: true,
        },
        user: {
          id: true,
          name: true,
          profileImage: true,
        },
      },
    });
  }
}
