import { Controller, Get, Post, Inject, Req, HttpCode } from '@nestjs/common';
import { Request } from 'express';

import { USER_SERVICE } from 'src/domain/service/ioc';
import { IUserService } from 'src/domain/service/user/user.service.interface';
import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';
import { LoginDto } from 'src/domain/service/dto/user.dto';

@Controller('/user')
export class UserController {
  constructor(
    @Inject(USER_SERVICE) private readonly userService: IUserService,
  ) {}

  @Get()
  async getAll(): Promise<UserVo[]> {
    return await this.userService.getAll();
  }

  @Post('/login')
  @HttpCode(200)
  async login(@Req() req: Request): Promise<LoginDto> {
    const { email, password } = req.body;
    return await this.userService.login(email, password);
  }
}
