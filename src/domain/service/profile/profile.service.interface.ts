import { ProfileVo } from 'src/infra/data/typeorm/vo/profile.vo';

export interface IProfileService {
  getUserProfile(profileId: number): Promise<ProfileVo[]>;
}
