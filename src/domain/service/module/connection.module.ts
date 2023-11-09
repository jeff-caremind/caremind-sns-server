import { Module } from '@nestjs/common';
import * as IOC from '../ioc';
import { RepositoryModule } from 'src/infra/data/interactor/repository/module/repository.module';
import { ConnectionController } from 'src/presentation/controller/controller/connection.controller';

@Module({
  imports: [RepositoryModule],
  providers: [IOC.ConnectionService],
  controllers: [ConnectionController],
})
export class ConnectionModule {}
