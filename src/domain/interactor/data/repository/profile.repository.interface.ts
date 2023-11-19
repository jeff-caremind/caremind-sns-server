import { ProfileVo } from 'src/infra/data/typeorm/vo/profile.vo';

export interface IProfileRepository {
  findProfileByProfileId(profileId: number): Promise<ProfileVo | null>;
  findProfileIdByUserId(userId: number): Promise<ProfileVo | null>;
  create(profile: ProfileVo): Promise<void>;
  update(updatedprofile: ProfileVo): Promise<void>;
  remove(profile: ProfileVo): Promise<void>;
}
