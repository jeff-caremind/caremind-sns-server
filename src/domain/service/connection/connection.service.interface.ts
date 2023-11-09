import { ConnectionDto } from '../dto/connection.dto';

export interface IConnectionService {
  createConnection(connectionDto: ConnectionDto): Promise<void>;
}
