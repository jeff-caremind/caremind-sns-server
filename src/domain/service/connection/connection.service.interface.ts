import { UserConnectionVo } from 'src/infra/data/typeorm/vo/user_connection.vo';

export interface IConnectionService {
  getAll(userId: number): Promise<UserConnectionVo[]>;
}
