import { ConnectionUpdateDto } from '../dto/connection.dto';

export interface IConnectionService {
  updateConnection(connectionDto: ConnectionUpdateDto): Promise<void>;
}
