import {
  Controller,
  Post,
  Get,
  Inject,
  Param,
  Body,
  Delete,
  Patch,
  Req,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JwtService } from '@nestjs/jwt';

import { IConnectionService } from 'src/domain/service/connection/connection.service.interface';
import { CONNECTION_SERVICE } from 'src/domain/service/ioc';
import {
  ConnectionDto,
  ConnectionWithUsersDto,
} from 'src/domain/service/dto/connection.dto';

@Controller('/connection')
export class ConnectionController {
  constructor(
    @Inject(CONNECTION_SERVICE)
    private readonly connectionService: IConnectionService,
    private readonly JwtService: JwtService,
  ) {}

  @Get('/connected')
  async getConnections(@Req() req: Request & { headers: { userId: number } }) {
    return await this.connectionService.getConnections(req.headers.userId);
  }

  @Get('/sent')
  async getSent(@Req() req: Request & { headers: { userId: number } }) {
    return await this.connectionService.getSent(req.headers.userId);
  }

  @Get('/received')
  async getReceived(@Req() req: Request & { headers: { userId: number } }) {
    return await this.connectionService.getReceived(req.headers.userId);
  }

  @Delete('/:connectionId')
  async deleteConnection(
    @Req() req: Request & { headers: { userId: number } },
    @Param('connectionId') connectionId: string,
  ) {
    const connectionDto: ConnectionDto = {
      userId: req.headers.userId,
      connectionId: Number(connectionId),
    };
    return await this.connectionService.deleteConnection(connectionDto);
  }

  @Post('/user/:userId')
  async createConnection(
    @Req() req: Request & { headers: { userId: number } },
    @Param('userId') userId: number,
    @Body('message') message: string,
  ): Promise<void> {
    const connectionDto: ConnectionWithUsersDto = {
      userId: req.headers.userId,
      connectedUserId: Number(userId),
      message: message,
    };
    return await this.connectionService.createConnection(connectionDto);
  }

  @Patch('/:connectionId')
  async acceptConnection(
    @Req() req: Request & { headers: { userId: number } },
    @Param('connectionId') connectionId: number,
  ) {
    const connectionDto: ConnectionDto = {
      userId: req.headers.userId,
      connectionId: connectionId,
    };
    await this.connectionService.acceptConnection(connectionDto);
  }
}
