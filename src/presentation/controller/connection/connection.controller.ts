import {
  Controller,
  Post,
  Get,
  Inject,
  Param,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';

import { IConnectionService } from 'src/domain/service/connection/connection.service.interface';
import { CONNECTION_SERVICE } from 'src/domain/service/ioc';
import {
  ConnectionDto,
  ConnectionWithUsersDto,
} from 'src/domain/service/dto/connection.dto';
import { SecurityServiceImpl } from 'src/domain/service/security/impl/security.service.implement';

@Controller('/connection')
export class ConnectionController {
  constructor(
    @Inject(CONNECTION_SERVICE)
    private readonly connectionService: IConnectionService,
    private readonly securityService: SecurityServiceImpl,
  ) {}

  @Get('/connected')
  async getConnections() {
    return await this.connectionService.getConnections(
      this.securityService.getUserId(),
    );
  }

  @Get('/sent')
  async getSent() {
    return await this.connectionService.getSent(
      this.securityService.getUserId(),
    );
  }

  @Get('/received')
  async getReceived() {
    return await this.connectionService.getReceived(
      this.securityService.getUserId(),
    );
  }

  @Delete('/:connectionId')
  async deleteConnection(@Param('connectionId') connectionId: string) {
    const connectionDto: ConnectionDto = {
      userId: this.securityService.getUserId(),
      connectionId: Number(connectionId),
    };
    return await this.connectionService.deleteConnection(connectionDto);
  }

  @Post('/user/:userId')
  async createConnection(
    @Param('userId') userId: number,
    @Body('message') message: string,
  ): Promise<void> {
    const connectionDto: ConnectionWithUsersDto = {
      userId: this.securityService.getUserId(),
      connectedUserId: Number(userId),
      message: message,
    };
    return await this.connectionService.createConnection(connectionDto);
  }

  @Patch('/:connectionId')
  async acceptConnection(@Param('connectionId') connectionId: number) {
    const connectionDto: ConnectionDto = {
      userId: this.securityService.getUserId(),
      connectionId: connectionId,
    };
    await this.connectionService.acceptConnection(connectionDto);
  }
}
