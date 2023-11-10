import { ConnectionDto } from '../dto/connection.dto';

export interface IConnectionService {
  deleteConnection(connectionDto: ConnectionDto): Promise<void>;
}
