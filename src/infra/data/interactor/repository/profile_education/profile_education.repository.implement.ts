import { Inject, Injectable } from '@nestjs/common';

import { IProfileEducationRepository } from 'src/domain/interactor/data/repository/profile_education.repository.interface';
import { PROFILE_EDUCATION_TYPEORM_REPOSITORY } from 'src/infra/data/typeorm/repository/ioc';
import { ProfileEducationVo } from 'src/infra/data/typeorm/vo/profile_education.vo';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileEducationRepositoryImpl
  implements IProfileEducationRepository
{
  constructor(
    @Inject(PROFILE_EDUCATION_TYPEORM_REPOSITORY)
    private readonly profileEducationTypeormRepository: Repository<ProfileEducationVo>,
  ) {}

  async findEducationByProfileId(
    profileId: number,
  ): Promise<ProfileEducationVo[]> {
    return await this.profileEducationTypeormRepository.find({
      relations: {
        educationInstitute: true,
      },
      where: {
        profile: { id: profileId },
      },
    });
  }
}
