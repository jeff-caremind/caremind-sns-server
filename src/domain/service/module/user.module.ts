import { Module } from '@nestjs/common';

import { RepositoryModule } from 'src/infra/data/interactor/repository/module/repository.module';
import * as IOC from '../ioc';
import { UserController } from 'src/presentation/controller/user/user.controller';
import { AuthModule } from './auth.module';

@Module({
  imports: [RepositoryModule, AuthModule],
  providers: [IOC.UserService],
  controllers: [UserController],
})
export class UserModule {}
