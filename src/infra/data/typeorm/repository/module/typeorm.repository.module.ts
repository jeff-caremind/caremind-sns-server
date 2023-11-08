import { Module } from '@nestjs/common';
import { TypeormConfigModule } from '../../config/typeorm.config';
import {
  FeedTypeormRepository,
  UserTypeormRepository,
  FeedCommentTypeormRepository,
  FeedLikeTypeormRepository,
  FeedVideoTypeormRepository,
} from '../ioc';

@Module({
  imports: [TypeormConfigModule],
  providers: [
    FeedTypeormRepository,
    UserTypeormRepository,
    FeedCommentTypeormRepository,
    FeedLikeTypeormRepository,
    FeedVideoTypeormRepository,
  ],
  exports: [
    FeedTypeormRepository,
    UserTypeormRepository,
    FeedCommentTypeormRepository,
    FeedLikeTypeormRepository,
    FeedVideoTypeormRepository,
  ],
})
export class TypeormRepositoryModule {}
