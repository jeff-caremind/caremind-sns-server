import { UserConnectionVo } from 'src/infra/data/typeorm/vo/user_connection.vo';

export interface IUserConnectionRepository {
  create(connection: UserConnectionVo): Promise<void>;
}
