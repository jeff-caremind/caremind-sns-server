import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';

export interface IUserService {
  getAll(): Promise<UserVo[]>;
}
