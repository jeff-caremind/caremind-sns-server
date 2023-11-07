import { Module } from '@nestjs/common';
import { TypeormConfigModule } from '../../config/typeorm.config';
import {
  FeedTypeormRepository,
  UserTypeormRepository,
  FeedCommentTypeormRepository,
  FeedLikeTypeormRepository,
} from '../ioc';

@Module({
  imports: [TypeormConfigModule],
  providers: [
    FeedTypeormRepository,
    UserTypeormRepository,
    FeedCommentTypeormRepository,
    FeedLikeTypeormRepository,
  ],
  exports: [
    FeedTypeormRepository,
    UserTypeormRepository,
    FeedCommentTypeormRepository,
    FeedLikeTypeormRepository,
  ],
})
export class TypeormRepositoryModule {}
