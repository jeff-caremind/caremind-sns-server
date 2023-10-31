import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/domain/interactor/data/repository/feed.repository.inteface';
import { USER_TYPEORM_REPOSITORY } from 'src/infra/data/typeorm/repository/ioc';
import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepositoryImpl implements IUserRepository {
  constructor(
    @Inject(USER_TYPEORM_REPOSITORY)
    private readonly userTypeormRepository: Repository<UserVo>,
  ) {}

  async findAll(): Promise<UserVo[]> {
    return await this.userTypeormRepository.find();
  }
}
