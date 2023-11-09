import { ConnectionDto } from '../dto/connection.dto';

export interface IConnectionService {
  updateConnection(connectionDto: ConnectionDto): Promise<void>;
}
