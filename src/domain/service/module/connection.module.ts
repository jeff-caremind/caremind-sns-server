import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/infra/data/interactor/repository/module/repository.module';
import * as IOC from '../ioc';
import { ConnectionController } from 'src/presentation/controller/connection/connection.controller';
import { AuthInterceptor } from 'src/domain/interactor/interceptor/auth.interceptor';

@Module({
  imports: [RepositoryModule],
  providers: [IOC.ConnectionService, AuthInterceptor],
  controllers: [ConnectionController],
})
export class ConnectionModule {}
