import { Controller, Get, Inject } from '@nestjs/common';
import { USER_SERVICE } from 'src/domain/service/ioc';
import { IUserService } from 'src/domain/service/user/user.service.interface';
import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';

@Controller('/user')
export class UserController {
  constructor(
    @Inject(USER_SERVICE) private readonly userService: IUserService,
  ) {}

  @Get()
  async getAll(): Promise<UserVo[]> {
    return await this.userService.getAll();
  }
}
