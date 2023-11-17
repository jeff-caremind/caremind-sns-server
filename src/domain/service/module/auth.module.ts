import { Module } from '@nestjs/common';
import * as IOC from '../ioc';
import { RepositoryModule } from 'src/infra/data/interactor/repository/module/repository.module';
import { SecurityModule } from './security.module';

@Module({
  imports: [
    RepositoryModule,
    SecurityModule.register({
      global: true,
      secret: process.env.JWT_SECRET_KEY,
      expiresIn: '12h',
    }),
  ],
  providers: [IOC.UserService, SecurityModule],
  exports: [IOC.UserService, SecurityModule],
})
export class AuthModule {}
