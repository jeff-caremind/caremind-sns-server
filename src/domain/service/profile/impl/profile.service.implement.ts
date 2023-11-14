import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { IProfileService } from '../profile.service.interface';
import {
  PROFILE_EDUCATION_REPOSITORY,
  PROFILE_EXPERIENCE_REPOSITORY,
  PROFILE_PROJECT_REPOSITORY,
  PROFILE_REPOSITORY,
  PROFILE_WEBSITE_REPOSITORY,
  USER_REPOSITORY,
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
import { ProfileDto, ProfileProjectDto } from '../../dto/profile.dto';
import { IUserRepository } from 'src/domain/interactor/data/repository/user.repository.interface';
import { ProjectImageVo } from 'src/infra/data/typeorm/vo/project_image.vo';

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

    @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
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

  async createProfile(profileDto: ProfileDto): Promise<void> {
    const { userId, jobDescription, about, location, address } = profileDto;
    const user = await this.userRepository.findOneById(userId);
    if (!user) throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    const profile = new ProfileVo();
    profile.user = user;
    if (jobDescription) profile.jobDescription = jobDescription;
    if (about) profile.about = about;
    if (location) profile.location = location;
    if (address) profile.address = address;
    return await this.profileRepository.create(profile);
  }

  async createProfileProject(
    profileProjectDto: ProfileProjectDto,
    profileId: number,
  ): Promise<void> {
    const { userId, title, description, startDate, endDate, projectImage } =
      profileProjectDto;
    const user = await this.userRepository.findOneById(userId);
    if (!user) throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);

    const profileIdByUserId =
      await this.profileRepository.findProfileIdByUserId(user.id);

    if (profileIdByUserId === null) {
      return;
    }

    // console.log(profileId);
    // console.log(profileIdByUserId);
    // console.log(profileIdByUserId.id);
    // console.log(typeof Number(profileId));
    // console.log(typeof profileIdByUserId.id);

    if (Number(profileId) !== profileIdByUserId.id)
      // profileIdByUserId?.id 에 optional?
      throw new HttpException('PROFILE_NOT_MATCHED', HttpStatus.NOT_ACCEPTABLE);

    const profileProject = new ProfileProjectVo();
    profileProject.profile = profileIdByUserId;

    if (title) profileProject.title = title;
    if (description) profileProject.description = description;
    if (startDate) profileProject.startDate = startDate;
    if (endDate) profileProject.endDate = endDate;
    if (projectImage)
      profileProject.projectImage = this.createImageVos(projectImage);

    return await this.profileProjectRepository.create(profileProject);
  }

  private createImageVos(images: string[]): ProjectImageVo[] {
    return images.map((item) => {
      const imageVo = new ProjectImageVo();
      imageVo.image = item;
      return imageVo;
    });
  }
}
