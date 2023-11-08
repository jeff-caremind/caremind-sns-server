import { Module } from '@nestjs/common';
import { TypeormConfigModule } from '../../config/typeorm.config';
import {
  FeedTypeormRepository,
  UserTypeormRepository,
  ProfileTypeormRepository,
  FeedCommentTypeormRepository,
  FeedLikeTypeormRepository,
} from '../ioc';

@Module({
  imports: [TypeormConfigModule],
  providers: [
    FeedTypeormRepository,
    UserTypeormRepository,
    ProfileTypeormRepository,
    FeedCommentTypeormRepository,
    FeedLikeTypeormRepository,
  ],
  exports: [
    FeedTypeormRepository,
    UserTypeormRepository,
    ProfileTypeormRepository,
    FeedCommentTypeormRepository,
    FeedLikeTypeormRepository,
  ],
})
export class TypeormRepositoryModule {}
