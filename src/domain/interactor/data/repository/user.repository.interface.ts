import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';

export interface IUserRepository {
  findAll(): Promise<UserVo[]>;
  createUser(userData: {}): Promise<void>;
}
