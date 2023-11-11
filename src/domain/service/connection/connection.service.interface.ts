import { ConnectionsDto, ConnectionDto } from '../dto/connection.dto';

export interface IConnectionService {
  getConnections(userId: number): Promise<ConnectionsDto>;
  createConnection(connectionDto: ConnectionDto): Promise<void>;
}
