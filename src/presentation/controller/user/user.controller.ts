import { Controller, Get, Post, Inject, Req } from '@nestjs/common';
import { Request } from 'express';

import { UserServiceImpl } from 'src/domain/service/user/impl/user.service.implement';
import { IUserService } from 'src/domain/service/user/user.service.interface';
import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';

@Controller('/user')
export class UserController {
  constructor(
    @Inject(UserServiceImpl) private readonly userService: IUserService,
  ) {}

  @Get()
  async getAll(): Promise<UserVo[]> {
    return await this.userService.getAll();
  }

  @Post('login')
  async login(@Req() req: Request): Promise<any> {
    const { email, password } = req.body;
    return await this.userService.login(email, password);
  }
}
