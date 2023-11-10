import { Inject, Injectable } from '@nestjs/common';

import { IProfileExperienceRepository } from 'src/domain/interactor/data/repository/profile_experience.repository.interface';
import { PROFILE_EXPERIENCE_TYPEORM_REPOSITORY } from 'src/infra/data/typeorm/repository/ioc';
import { ProfileExperienceVo } from 'src/infra/data/typeorm/vo/profile_experience.vo';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileExperienceRepositoryImpl
  implements IProfileExperienceRepository
{
  constructor(
    @Inject(PROFILE_EXPERIENCE_TYPEORM_REPOSITORY)
    private readonly profileExperienceTypeormRepository: Repository<ProfileExperienceVo>,
  ) {}

  async findExperienceByProfileId(
    profileId: number,
  ): Promise<ProfileExperienceVo[]> {
    return await this.profileExperienceTypeormRepository.find({
      relations: {
        experienceCompany: true,
      },
      where: {
        profile: { id: profileId },
      },
    });
  }
}
