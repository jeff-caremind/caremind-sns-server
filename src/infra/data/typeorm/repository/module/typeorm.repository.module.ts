import { Module } from '@nestjs/common';
import { TypeormConfigModule } from '../../config/typeorm.config';
import {
  FeedTypeormRepository,
  UserTypeormRepository,
  FeedCommentTypeormRepository,
  FeedLikeTypeormRepository,
  FeedVideoTypeormRepository,
  UserConnectionTypeormRepository,
} from '../ioc';

@Module({
  imports: [TypeormConfigModule],
  providers: [
    FeedTypeormRepository,
    UserTypeormRepository,
    FeedCommentTypeormRepository,
    FeedLikeTypeormRepository,
    FeedVideoTypeormRepository,
    UserConnectionTypeormRepository,
  ],
  exports: [
    FeedTypeormRepository,
    UserTypeormRepository,
    FeedCommentTypeormRepository,
    FeedLikeTypeormRepository,
    FeedVideoTypeormRepository,
    UserConnectionTypeormRepository,
  ],
})
export class TypeormRepositoryModule {}
