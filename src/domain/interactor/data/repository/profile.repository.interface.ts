import { ProfileVo } from 'src/infra/data/typeorm/vo/profile.vo';

export interface IProfileRepository {
  findAllByProfileId(profileId: number): Promise<ProfileVo[]>;
}
