import { ConnectionsDto } from '../dto/connection.dto';

export interface IConnectionService {
  getConnections(userId: number): Promise<ConnectionsDto>;
}
