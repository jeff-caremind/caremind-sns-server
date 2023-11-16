import { Inject, Injectable } from '@nestjs/common';

import { IProfileProjectRepository } from 'src/domain/interactor/data/repository/profile_project.repository.interface';
import { PROFILE_PROJECT_TYPEORM_REPOSITORY } from 'src/infra/data/typeorm/repository/ioc';
import { ProfileProjectVo } from 'src/infra/data/typeorm/vo/profile_project.vo';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileProjectRepositoryImpl implements IProfileProjectRepository {
  constructor(
    @Inject(PROFILE_PROJECT_TYPEORM_REPOSITORY)
    private readonly profileProjectTypeormRepository: Repository<ProfileProjectVo>,
  ) {}

  async findProjectByProfileId(profileId: number): Promise<ProfileProjectVo[]> {
    const project = await this.profileProjectTypeormRepository.find({
      relations: {
        projectImage: true,
        projectCategory: true,
      },
      where: {
        profile: { id: profileId },
      },
    });

    return project;
  }

  async create(profileProject: ProfileProjectVo): Promise<void> {
    await this.profileProjectTypeormRepository.save(profileProject);
  }
}
