import { ConnectionDto } from '../dto/connection.dto';

export interface IConnectionService {
  followUser(connectionDto: ConnectionDto): Promise<void>;
}
