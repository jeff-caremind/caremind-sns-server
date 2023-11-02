import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';

export interface IUserRepository {
  findAll(): Promise<UserVo[]>;
  create(userData: {}): Promise<void>;
  findOneByEmail(email: string): Promise<UserVo | null>;
}
