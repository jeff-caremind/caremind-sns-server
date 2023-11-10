import { Controller, Get, Inject, Headers } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JwtService } from '@nestjs/jwt';
import { IConnectionService } from 'src/domain/service/connection/connection.service.interface';
import { CONNECTION_SERVICE } from 'src/domain/service/ioc';

@Controller('/connection')
export class ConnectionController {
  constructor(
    @Inject(CONNECTION_SERVICE)
    private readonly connectionService: IConnectionService,
    private readonly JwtService: JwtService,
  ) {}

  @Get('/sent')
  async getSent(@Headers('authorization') token: string) {
    const decoded = this.verifyToken(token);
    return await this.connectionService.getSent(decoded.aud);
  }

  verifyToken(token: string): { aud: number } {
    const decoded = this.JwtService.verify(token);
    return decoded;
  }
}
