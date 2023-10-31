import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';

export interface IUserService {
  getAll(): Promise<UserVo[]>; // : ~~~()  :  결과값(Promise~~~)   >> getAll()을 실행하면, Promise(비동기)로 UserVo들을 []로 출력
  signUp(userData: {}): Promise<void>;
}
