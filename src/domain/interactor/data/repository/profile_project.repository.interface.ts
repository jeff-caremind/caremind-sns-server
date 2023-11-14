import { ProfileProjectVo } from 'src/infra/data/typeorm/vo/profile_project.vo';

export interface IProfileProjectRepository {
  findProjectByProfileId(profileId: number): Promise<ProfileProjectVo[] | null>;
}
