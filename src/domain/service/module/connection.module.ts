import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/infra/data/interactor/repository/module/repository.module';
import * as IOC from '../ioc';
import { ConnectionController } from 'src/presentation/controller/connection/connection.controller';
import { AuthModule } from './auth.module';

@Module({
  imports: [RepositoryModule, AuthModule],
  providers: [IOC.ConnectionService],
  controllers: [ConnectionController],
})
export class ConnectionModule {}
