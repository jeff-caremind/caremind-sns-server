import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';
import {
  LoginResponseDto,
  SignUpRequestDto,
} from 'src/domain/service/dto/user.dto';

export interface IUserService {
  getAll(): Promise<UserVo[]>; // : ~~~()  :  결과값(Promise~~~)   >> getAll()을 실행하면, Promise(비동기)로 UserVo들을 []로 출력
  signUp(userData: SignUpRequestDto): Promise<void>;
  login(email: string, password: string): Promise<LoginResponseDto>;
  getOne(userId: number): Promise<UserVo | null>;
}
