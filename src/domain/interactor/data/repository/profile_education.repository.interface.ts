import { ProfileEducationVo } from 'src/infra/data/typeorm/vo/profile_education.vo';

export interface IProfileEducationRepository {
  findEducationByProfileId(
    profileId: number,
  ): Promise<ProfileEducationVo[] | null>;
  create(profileEducation: ProfileEducationVo): Promise<void>;
  findEducationByEducationId(
    educationId: number,
  ): Promise<ProfileEducationVo | null>;
  update(education: ProfileEducationVo): Promise<void>;
}
