import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';

export interface IUserRepository {
  findAll(): Promise<UserVo[]>;
  findOneByEmail(email: string): Promise<UserVo | null>;
}
