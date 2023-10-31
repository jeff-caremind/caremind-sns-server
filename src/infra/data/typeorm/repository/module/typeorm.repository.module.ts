import { Module } from '@nestjs/common';
import { TypeormConfigModule } from '../../config/typeorm.config';
import { FeedTypeormRepository, UserTypeormRepository } from '../ioc';

@Module({
  imports: [TypeormConfigModule],
  providers: [FeedTypeormRepository, UserTypeormRepository],
  exports: [FeedTypeormRepository, UserTypeormRepository],
})
export class TypeormRepositoryModule {}
