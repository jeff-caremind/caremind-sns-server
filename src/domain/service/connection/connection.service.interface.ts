import { ConnectionDto } from '../dto/connection.dto';

export interface IConnectionService {
  deleteConnection(connectionDto: ConnectionDto): Promise<void>;
  acceptConnection(connectionDto: ConnectionDto): Promise<void>;
  createConnection(connectionDto: ConnectionDto): Promise<void>;
}
