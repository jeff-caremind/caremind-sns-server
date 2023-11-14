import { ProfileVo } from 'src/infra/data/typeorm/vo/profile.vo';
import { ProfileEducationVo } from 'src/infra/data/typeorm/vo/profile_education.vo';
import { ProfileExperienceVo } from 'src/infra/data/typeorm/vo/profile_experience.vo';
import { ProfileProjectVo } from 'src/infra/data/typeorm/vo/profile_project.vo';
import { ProfileWebsiteVo } from 'src/infra/data/typeorm/vo/profile_website.vo';

export interface IProfileService {
  getUserProfile(profileId: number): Promise<ProfileVo | null>;
  getProfileProject(profileId: number): Promise<ProfileProjectVo[] | null>;
  getProfileExperience(
    profileId: number,
  ): Promise<ProfileExperienceVo[] | null>;
  getProfileEducation(profileId: number): Promise<ProfileEducationVo[] | null>;
  getProfileWebsite(profileId: number): Promise<ProfileWebsiteVo[] | null>;
}
