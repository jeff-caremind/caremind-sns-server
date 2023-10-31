import { Module } from '@nestjs/common';
import { TypeormRepositoryModule } from 'src/infra/data/typeorm/repository/module/typeorm.repository.module';
import * as IOC from '../ioc';

@Module({
  imports: [TypeormRepositoryModule],
  providers: [IOC.FeedRepository, IOC.UserRepository],
  exports: [IOC.FeedRepository, IOC.UserRepository],
})
export class RepositoryModule {}
