import { Module } from '@nestjs/common';

import { RepositoryModule } from 'src/infra/data/interactor/repository/module/repository.module';
import * as IOC from '../ioc';
import { ProfileController } from 'src/presentation/controller/profile/profile.controller';
import { AuthModule } from './auth.module';

@Module({
  imports: [RepositoryModule, AuthModule],
  providers: [IOC.ProfileService],
  controllers: [ProfileController],
})
export class ProfileModule {}
