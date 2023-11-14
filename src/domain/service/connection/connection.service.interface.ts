import { ConnectionsDto, ConnectionDto } from '../dto/connection.dto';
import { UserConnectionVo } from 'src/infra/data/typeorm/vo/user_connection.vo';

export interface IConnectionService {
  getConnections(userId: number): Promise<ConnectionsDto>;
  getSent(userId: number): Promise<UserConnectionVo[]>;
  getReceived(userId: number): Promise<UserConnectionVo[]>;
  deleteConnection(connectionDto: ConnectionDto): Promise<void>;
  acceptConnection(connectionDto: ConnectionDto): Promise<void>;
  createConnection(connectionDto: ConnectionDto): Promise<void>;
}
