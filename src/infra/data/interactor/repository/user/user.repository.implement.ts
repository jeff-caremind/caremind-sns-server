import { Inject, Injectable } from '@nestjs/common';

import { IUserRepository } from 'src/domain/interactor/data/repository/user.repository.interface';
import { SignUpRequestDto } from 'src/domain/service/dto/user.dto';
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

  async create(userData: SignUpRequestDto): Promise<void> {
    // void : 리턴값이 없다.
    const user = this.userTypeormRepository.create(userData);
    await this.userTypeormRepository.save(user);
  }

  async findOneByEmail(email: string): Promise<UserVo | null> {
    return await this.userTypeormRepository.findOneBy({ email: email });
  }

  async findOneById(userId: number): Promise<UserVo | null> {
    return await this.userTypeormRepository.findOneBy({ id: userId });
  }
}
