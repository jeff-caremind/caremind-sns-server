import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';
import { LoginDto } from 'src/domain/service/dto/user.dto';

export interface IUserService {
  getAll(): Promise<UserVo[]>;
  login(email: string, password: string): Promise<LoginDto>;
}
