import { Controller, Post, Inject, Headers, Param, Body, Delete } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JwtService } from '@nestjs/jwt';
import { IConnectionService } from 'src/domain/service/connection/connection.service.interface';
import { CONNECTION_SERVICE } from 'src/domain/service/ioc';
import { ConnectionDto } from 'src/domain/service/dto/connection.dto';

@Controller('/connection')
export class ConnectionController {
  constructor(
    @Inject(CONNECTION_SERVICE)
    private readonly connectionService: IConnectionService,
    private readonly JwtService: JwtService,
  ) {}

  @Delete('/:connectionId')
  async deleteConnection(
    @Headers('authorization') token: string,
    @Param('connectionId') connectionId: string,
  ) {
    const decoded = this.verifyToken(token);
    const connectionDto: ConnectionDto = {
      userId: decoded.aud,
      connectionId: Number(connectionId),
    };
    return await this.connectionService.deleteConnection(connectionDto);
  }

  @Post('/user/:userId')
  async createConnection(
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
    return await this.connectionService.createConnection(connectionDto);
  }

  verifyToken(token: string): { aud: number } {
    const decoded = this.JwtService.verify(token);
    return decoded;
  }
}
