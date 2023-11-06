import { Module } from '@nestjs/common';
import { TypeormConfigModule } from '../../config/typeorm.config';
import {
  FeedLikeTypeormRepository,
  FeedTypeormRepository,
  UserTypeormRepository,
} from '../ioc';

@Module({
  imports: [TypeormConfigModule],
  providers: [
    FeedTypeormRepository,
    UserTypeormRepository,
    FeedLikeTypeormRepository,
  ],
  exports: [
    FeedTypeormRepository,
    UserTypeormRepository,
    FeedLikeTypeormRepository,
  ],
})
export class TypeormRepositoryModule {}
