import { UserConnectionVo } from 'src/infra/data/typeorm/vo/user_connection.vo';

export interface IUserConnectionRepository {
  findConnections(userId: number): Promise<UserConnectionVo[]>;
  findSent(userId: number): Promise<UserConnectionVo[]>;
  findReceived(userId: number): Promise<UserConnectionVo[]>;
  findOneWithRelationsById(userId: number): Promise<UserConnectionVo | null>;
  remove(connection: UserConnectionVo): Promise<void>;
  update(connection: UserConnectionVo): Promise<void>;
  findOneWithConnectedUserById(
    connectionId: number,
  ): Promise<UserConnectionVo | null>;
  create(connection: UserConnectionVo): Promise<void>;
  findExistingConnection(
    userId: number,
    connectedUserId: number,
  ): Promise<UserConnectionVo | null>;
}
