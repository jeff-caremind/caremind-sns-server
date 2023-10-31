import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { USER_SERVICE } from 'src/domain/service/ioc';
import { IUserService } from 'src/domain/service/user/user.service.interface';
import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';

@Controller('/user')
export class UserController {
  constructor(
    // class안에서 사용할 수 있는 변수 생성
    @Inject(USER_SERVICE) private readonly userService: IUserService, // userService라는 키에 타입이 IUser~~로 생성된 것, USER_SERVICE를 값으로 inject(implement를 바로 넣어줘도 된다.)
  ) {}

  @Get()
  async getAll(): Promise<UserVo[]> {
    // Promise 상태로, Uservo를 []에 넣어서 return한다.  /  class의 getAll 메소드인 것
    return await this.userService.getAll(); // 해당 class(this)에 생성된 .userService 중 getAll()을 불러오는데, userService의 값으로 USER_SERVICE가 Inject 되었으니 USER_SERVICE의 get.All()을 불러오는 것
  }

  @Post('/signup')
  async signUp(
    @Body() userData: { name?: string; email: string; password: string },
  ): Promise<void> {
    if (!userData || !userData.email || !userData.password) {
      throw new HttpException('KEY ERROR', HttpStatus.BAD_REQUEST);
    }
    return await this.userService.signUp(userData);
  }
}
