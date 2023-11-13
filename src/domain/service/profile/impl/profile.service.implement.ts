import { Inject, Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { IProfileService } from '../profile.service.interface';
import {
  PROFILE_EDUCATION_REPOSITORY,
  PROFILE_EXPERIENCE_REPOSITORY,
  PROFILE_PROJECT_REPOSITORY,
  PROFILE_REPOSITORY,
  PROFILE_WEBSITE_REPOSITORY,
} from 'src/infra/data/interactor/repository/ioc';
import { IProfileRepository } from 'src/domain/interactor/data/repository/profile.repository.interface';
import { ProfileVo } from 'src/infra/data/typeorm/vo/profile.vo';
import { IProfileProjectRepository } from 'src/domain/interactor/data/repository/profile_project.repository.interface';
import { ProfileProjectVo } from 'src/infra/data/typeorm/vo/profile_project.vo';
import { IProfileExperienceRepository } from 'src/domain/interactor/data/repository/profile_experience.repository.interface';
import { ProfileExperienceVo } from 'src/infra/data/typeorm/vo/profile_experience.vo';
import { IProfileEducationRepository } from 'src/domain/interactor/data/repository/profile_education.repository.interface';
import { ProfileEducationVo } from 'src/infra/data/typeorm/vo/profile_education.vo';
import { IProfileWebsiteRepository } from 'src/domain/interactor/data/repository/profile_website.repository.interface';
import { ProfileWebsiteVo } from 'src/infra/data/typeorm/vo/profile_website.vo';

@Injectable()
export class ProfileServiceImpl implements IProfileService {
  constructor(
    @Inject(PROFILE_REPOSITORY)
    private readonly profileRepository: IProfileRepository,

    @Inject(PROFILE_PROJECT_REPOSITORY)
    private readonly profileProjectRepository: IProfileProjectRepository,

    @Inject(PROFILE_EXPERIENCE_REPOSITORY)
    private readonly profileExperienceRepository: IProfileExperienceRepository,

    @Inject(PROFILE_EDUCATION_REPOSITORY)
    private readonly profileEducationRepository: IProfileEducationRepository,

    @Inject(PROFILE_WEBSITE_REPOSITORY)
    private readonly profileWebsiteRepository: IProfileWebsiteRepository,
  ) {}

  async getUserProfile(profileId: number): Promise<ProfileVo | null> {
    const profile = await this.profileRepository.findProfileByProfileId(
      Number(profileId),
    );

    if (!profile) {
      return null;
    }

    return profile;
  }

  async getProfileProject(
    profileId: number,
  ): Promise<ProfileProjectVo[] | null> {
    const profileProject =
      await this.profileProjectRepository.findProjectByProfileId(
        Number(profileId),
      );

    if (profileProject === null) {
      return null;
    }

    profileProject.forEach((profileProject) => {
      if (
        profileProject.projectImage &&
        profileProject.projectImage.length > 0
      ) {
        profileProject.coverImage = profileProject.projectImage[0];
      }
    });

    return profileProject;
  }

  async getProfileExperience(
    profileId: number,
  ): Promise<ProfileExperienceVo[] | null> {
    const profileExperience =
      await this.profileExperienceRepository.findExperienceByProfileId(
        Number(profileId),
      );
    return profileExperience;
  }

  async getProfileEducation(
    profileId: number,
  ): Promise<ProfileEducationVo[] | null> {
    const profileEducation =
      await this.profileEducationRepository.findEducationByProfileId(
        Number(profileId),
      );
    return profileEducation;
  }

  async getProfileWebsite(
    profileId: number,
  ): Promise<ProfileWebsiteVo[] | null> {
    const profileWebsite =
      await this.profileWebsiteRepository.findWebsiteByProfileId(
        Number(profileId),
      );
    return profileWebsite;
  }
}
