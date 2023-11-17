import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/infra/data/interactor/repository/module/repository.module';
import * as IOC from '../ioc';
import { ConnectionController } from 'src/presentation/controller/connection/connection.controller';

@Module({
  imports: [RepositoryModule],
  providers: [IOC.ConnectionService],
  controllers: [ConnectionController],
})
export class ConnectionModule {}
