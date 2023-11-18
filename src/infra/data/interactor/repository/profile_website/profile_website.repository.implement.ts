import { Inject, Injectable } from '@nestjs/common';

import { IProfileWebsiteRepository } from 'src/domain/interactor/data/repository/profile_website.repository.interface';
import { PROFILE_WEBSITE_TYPEORM_REPOSITORY } from 'src/infra/data/typeorm/repository/ioc';
import { ProfileWebsiteVo } from 'src/infra/data/typeorm/vo/profile_website.vo';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileWebsiteRepositoryImpl implements IProfileWebsiteRepository {
  constructor(
    @Inject(PROFILE_WEBSITE_TYPEORM_REPOSITORY)
    private readonly profileWebsiteTypeormRepository: Repository<ProfileWebsiteVo>,
  ) {}

  async findWebsiteByProfileId(profileId: number): Promise<ProfileWebsiteVo[]> {
    return await this.profileWebsiteTypeormRepository.find({
      where: {
        profile: { id: profileId },
      },
    });
  }

  async create(profileWebsite: ProfileWebsiteVo): Promise<void> {
    await this.profileWebsiteTypeormRepository.save(profileWebsite);
  }

  async findOneById(websiteId: number): Promise<void> {
    await this.profileWebsiteTypeormRepository.remove(website);
  }

  async remove(website: ProfileWebsiteVo): Promise<void> {
    await this.profileWebsiteTypeormRepository.remove(website);
  }
}
