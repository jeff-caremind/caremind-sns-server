import { Module } from '@nestjs/common';

import { RepositoryModule } from 'src/infra/data/interactor/repository/module/repository.module';
import * as IOC from '../ioc';
import { FeedController } from 'src/presentation/controller/feed/feed.controller';
import { AuthModule } from './auth.module';

@Module({
  imports: [RepositoryModule, AuthModule],
  providers: [IOC.FeedService],
  controllers: [FeedController],
})
export class FeedModule {}
