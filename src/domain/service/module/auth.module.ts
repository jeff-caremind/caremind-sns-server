import { Module } from '@nestjs/common';
import * as IOC from '../ioc';
import { AuthInterceptor } from 'src/domain/interactor/interceptor/auth.interceptor';
import { RepositoryModule } from 'src/infra/data/interactor/repository/module/repository.module';

@Module({
  imports: [RepositoryModule],
  providers: [AuthInterceptor, IOC.UserService],
  exports: [AuthInterceptor, IOC.UserService],
})
export class AuthModule {}
