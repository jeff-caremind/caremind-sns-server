import { UserConnectionVo } from 'src/infra/data/typeorm/vo/user_connection.vo';
import { ConnectionDto, ConnectionWithUsersDto } from '../dto/connection.dto';

export interface IConnectionService {
  getSent(userId: number): Promise<UserConnectionVo[]>;
  getReceived(userId: number): Promise<UserConnectionVo[]>;
  deleteConnection(connectionDto: ConnectionDto): Promise<void>;
  acceptConnection(connectionDto: ConnectionDto): Promise<void>;
  createConnection(connectionDto: ConnectionWithUsersDto): Promise<void>;
}
