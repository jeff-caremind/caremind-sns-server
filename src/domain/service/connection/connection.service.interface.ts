import { UserConnectionVo } from 'src/infra/data/typeorm/vo/user_connection.vo';

export interface IConnectionService {
  getReceived(userId: number): Promise<UserConnectionVo[]>;
}
