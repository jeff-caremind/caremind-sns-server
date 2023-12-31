import { SignUpRequestDto } from 'src/domain/service/dto/user.dto';
import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';

export interface IUserRepository {
  findMany(): Promise<UserVo[]>;
  create(userData: SignUpRequestDto): Promise<void>;
  findOneByEmail(email: string): Promise<UserVo | null>;
  findOneById(id: number): Promise<UserVo | null>;
}
