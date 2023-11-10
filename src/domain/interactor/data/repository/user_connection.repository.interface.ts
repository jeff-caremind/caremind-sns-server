import { UserConnectionVo } from 'src/infra/data/typeorm/vo/user_connection.vo';

export interface IUserConnectionRepository {
  findOneWithRelationsById(userId: number): Promise<UserConnectionVo | null>;
  remove(connection: UserConnectionVo): Promise<void>;
}
