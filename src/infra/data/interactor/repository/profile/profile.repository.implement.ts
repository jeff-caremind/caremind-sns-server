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

  async findAllByProfileId(profileId: number): Promise<ProfileVo[]> {
    return await this.profileTypeormRepository.find({
      select: {
        user: {
          email: true,
          profileImage: true,
        },
      },
      relations: {
        profileProject: {
          projectImage: true,
          projectCategory: true,
        },
        profileExperience: {
          exerienceCompany: true,
        },
        profileEducation: {
          educationInstitute: true,
        },
        profileWebsite: true,
        user: true,
      },
      where: {
        id: profileId,
      },
    });
  }
}
