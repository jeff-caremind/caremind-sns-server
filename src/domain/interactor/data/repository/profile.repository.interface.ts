import { ProfileVo } from 'src/infra/data/typeorm/vo/profile.vo';

export interface IProfileRepository {
  findProfileByProfileId(profileId: number): Promise<ProfileVo | null>;
}
