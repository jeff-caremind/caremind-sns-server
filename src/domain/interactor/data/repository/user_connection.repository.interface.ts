import { UserConnectionVo } from 'src/infra/data/typeorm/vo/user_connection.vo';

export interface IUserConnectionRepository {
  findSent(userId: number): Promise<UserConnectionVo[]>;
}
