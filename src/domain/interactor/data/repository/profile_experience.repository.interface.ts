import { ProfileExperienceVo } from 'src/infra/data/typeorm/vo/profile_experience.vo';

export interface IProfileExperienceRepository {
  findExperienceByProfileId(
    profileId: number,
  ): Promise<ProfileExperienceVo[] | null>;
  create(profileExperience: ProfileExperienceVo): Promise<void>;
}
