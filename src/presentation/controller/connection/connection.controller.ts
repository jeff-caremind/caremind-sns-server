import { Controller, Post, Inject, Headers, Param, Body } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JwtService } from '@nestjs/jwt';

import { IConnectionService } from 'src/domain/service/connection/connection.service.interface';
import { ConnectionDto } from 'src/domain/service/dto/connection.dto';
import { CONNECTION_SERVICE } from 'src/domain/service/ioc';

@Controller('/connection')
export class ConnectionController {
  constructor(
    @Inject(CONNECTION_SERVICE)
    private readonly connectionService: IConnectionService,
    private readonly JwtService: JwtService,
  ) {}

  @Post('/user/:userId')
  async followUser(
    @Headers('authorization') token: string,
    @Param('userId') userId: number,
    @Body('message') message: string,
  ): Promise<void> {
    const decoded = this.verifyToken(token);
    const connectionDto: ConnectionDto = {
      userId: decoded.aud,
      connectedUserId: Number(userId),
      message: message,
    };
    return await this.connectionService.followUser(connectionDto);
  }

  verifyToken(token: string): { aud: number } {
    const decoded = this.JwtService.verify(token);
    return decoded;
  }
}
