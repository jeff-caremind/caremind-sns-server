import { Module } from '@nestjs/common';

import { RepositoryModule } from 'src/infra/data/interactor/repository/module/repository.module';
import * as IOC from '../ioc';
import { FeedController } from 'src/presentation/controller/feed/feed.controller';
import { AuthInterceptor } from 'src/domain/interactor/interceptor/auth.interceptor';

@Module({
  imports: [RepositoryModule],
  providers: [IOC.FeedService, AuthInterceptor],
  controllers: [FeedController],
})
export class FeedModule {}
