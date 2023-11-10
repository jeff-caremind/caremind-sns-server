import { UserConnectionVo } from 'src/infra/data/typeorm/vo/user_connection.vo';

export interface IConnectionService {
  getConnections(userId: number): Promise<UserConnectionVo[]>;
}
