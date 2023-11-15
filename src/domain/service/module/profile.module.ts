import { Module } from '@nestjs/common';

import { RepositoryModule } from 'src/infra/data/interactor/repository/module/repository.module';
import * as IOC from '../ioc';
import { ProfileController } from 'src/presentation/controller/profile/profile.controller';
import { AuthInterceptor } from 'src/domain/interactor/interceptor/auth.interceptor';

@Module({
  imports: [RepositoryModule],
  providers: [IOC.ProfileService, IOC.UserService, AuthInterceptor],
  controllers: [ProfileController],
})
export class ProfileModule {}
