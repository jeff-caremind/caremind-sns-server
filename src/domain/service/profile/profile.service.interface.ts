import { ProfileVo } from 'src/infra/data/typeorm/vo/profile.vo';
import { ProfileEducationVo } from 'src/infra/data/typeorm/vo/profile_education.vo';
import { ProfileExperienceVo } from 'src/infra/data/typeorm/vo/profile_experience.vo';
import { ProfileProjectVo } from 'src/infra/data/typeorm/vo/profile_project.vo';
import { ProfileWebsiteVo } from 'src/infra/data/typeorm/vo/profile_website.vo';
import {
  ProfileDeleteDto,
  ProfileDto,
  ProfileEducationDeleteDto,
  ProfileEducationDto,
  ProfileExperienceDeleteDto,
  ProfileExperienceDto,
  ProfileProjectDeleteDto,
  ProfileProjectDto,
  ProfileWebsiteDeleteDto,
  ProfileWebsiteDto,
} from '../dto/profile.dto';

export interface IProfileService {
  getProfileId(userId: number): Promise<ProfileVo | null>;
  getUserProfile(profileId: number): Promise<ProfileVo | null>;
  getProfileProject(profileId: number): Promise<ProfileProjectVo[] | null>;
  getProfileExperience(
    profileId: number,
  ): Promise<ProfileExperienceVo[] | null>;
  getProfileEducation(profileId: number): Promise<ProfileEducationVo[] | null>;
  getProfileWebsite(profileId: number): Promise<ProfileWebsiteVo[] | null>;
  createProfile(profileDto: ProfileDto): Promise<void>;
  createProfileProject(
    profileProjectDto: ProfileProjectDto,
    profileId: number,
  ): Promise<void>;
  createProfileExperience(
    profileExperienceDto: ProfileExperienceDto,
    profileId: number,
  ): Promise<void>;
  createProfileWebsite(
    profileWebsiteDto: ProfileWebsiteDto,
    profileId: number,
  ): Promise<void>;
  createProfileEducation(
    profileEducationDto: ProfileEducationDto,
    profileId: number,
  ): Promise<void>;

  deleteProfile(profileDeleteDto: ProfileDeleteDto): Promise<void>;
  deleteProfileProject(
    profileProjectDeleteDto: ProfileProjectDeleteDto,
  ): Promise<void>;
  deleteProfileExperience(
    profileExperienceDeleteDto: ProfileExperienceDeleteDto,
  ): Promise<void>;
  deleteProfileEducation(
    profileEducationDeleteDto: ProfileEducationDeleteDto,
  ): Promise<void>;
  deleteProfileWebsite(
    ProfileWebsiteDeleteDto: ProfileWebsiteDeleteDto,
  ): Promise<void>;
}
