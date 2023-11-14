import { ProfileVo } from 'src/infra/data/typeorm/vo/profile.vo';
import { ProfileEducationVo } from 'src/infra/data/typeorm/vo/profile_education.vo';
import { ProfileExperienceVo } from 'src/infra/data/typeorm/vo/profile_experience.vo';
import { ProfileProjectVo } from 'src/infra/data/typeorm/vo/profile_project.vo';
import { ProfileWebsiteVo } from 'src/infra/data/typeorm/vo/profile_website.vo';
import { ProfileDto, ProfileProjectDto } from '../dto/profile.dto';

export interface IProfileService {
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
}
