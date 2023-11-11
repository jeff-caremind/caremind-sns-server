import { UserConnectionVo } from 'src/infra/data/typeorm/vo/user_connection.vo';

export interface IUserConnectionRepository {
  update(connection: UserConnectionVo): Promise<void>;
  findOneWithConnectedUserById(
    connectionId: number,
  ): Promise<UserConnectionVo | null>;
  create(connection: UserConnectionVo): Promise<void>;
}
