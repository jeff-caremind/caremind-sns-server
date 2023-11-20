import { Inject, Injectable } from '@nestjs/common';

import { IProfileRepository } from 'src/domain/interactor/data/repository/profile.repository.interface';
import { PROFILE_TYPEORM_REPOSITORY } from 'src/infra/data/typeorm/repository/ioc';
import { ProfileVo } from 'src/infra/data/typeorm/vo/profile.vo';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileRepositoryImpl implements IProfileRepository {
  constructor(
    @Inject(PROFILE_TYPEORM_REPOSITORY)
    private readonly profileTypeormRepository: Repository<ProfileVo>,
  ) {}

  async findProfileByProfileId(profileId: number): Promise<ProfileVo | null> {
    console.log('profileId', profileId);
    return await this.profileTypeormRepository.findOne({
      relations: {
        user: true,
      },
      select: {
        user: {
          id: true,
          name: true,
          email: true,
          profileImage: true,
        },
      },
      where: {
        id: profileId,
      },
    });
  }
  async findProfileIdByUserId(userId: number): Promise<ProfileVo | null> {
    return await this.profileTypeormRepository.findOne({
      select: {
        id: true,
      },
      where: {
        user: { id: userId },
      },
    });
  }

  async create(profile: ProfileVo): Promise<void> {
    await this.profileTypeormRepository.save(profile);
  }
}
