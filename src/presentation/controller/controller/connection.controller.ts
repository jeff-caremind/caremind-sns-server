import { Controller, Inject, Patch, Headers, Param } from '@nestjs/common';
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

  @Patch('/:connectionId')
  async acceptConnection(
    @Headers('authorization') token: string,
    @Param('connectionId') connectionId: number,
  ) {
    const decoded = this.verifyToken(token);
    const connectionDto: ConnectionDto = {
      userId: decoded.aud,
      connectionId: connectionId,
    };
    await this.connectionService.acceptConnection(connectionDto);
  }

  verifyToken(token: string): { aud: number } {
    const decoded = this.JwtService.verify(token);
    return decoded;
  }
}
