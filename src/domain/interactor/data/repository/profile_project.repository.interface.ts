import { ProfileProjectVo } from 'src/infra/data/typeorm/vo/profile_project.vo';

export interface IProfileProjectRepository {
  findProjectByProfileId(profileId: number): Promise<ProfileProjectVo[] | null>;
  create(profileProject: ProfileProjectVo): Promise<void>;
  findProjectByProjectId(projectId: number): Promise<ProfileProjectVo | null>;
  update(project: ProfileProjectVo): Promise<void>;
}
