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

  async create(profileExperience: ProfileExperienceVo): Promise<void> {
    await this.profileExperienceTypeormRepository.save(profileExperience);
  }

  async findExperienceByExperienceId(
    experienceId: number,
  ): Promise<ProfileExperienceVo | null> {
    const eachExperience =
      await this.profileExperienceTypeormRepository.findOne({
        relations: {
          experienceCompany: true,
        },
        where: {
          id: experienceId,
        },
      });
    return eachExperience;
  }

  async update(experience: ProfileExperienceVo): Promise<void> {
    await this.profileExperienceTypeormRepository.save(experience);
  }
}
