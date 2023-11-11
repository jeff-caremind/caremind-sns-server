import { Module } from '@nestjs/common';
import { TypeormConfigModule } from '../../config/typeorm.config';
import {
  FeedTypeormRepository,
  UserTypeormRepository,
  FeedCommentTypeormRepository,
  FeedLikeTypeormRepository,
  FeedVideoTypeormRepository,
  ProfileTypeormRepository,
  ProfileProjectTypeormRepository,
  ProfileExperienceTypeormRepository,
  ProfileEducationTypeormRepository,
  ProfileWebsiteTypeormRepository,
} from '../ioc';

@Module({
  imports: [TypeormConfigModule],
  providers: [
    FeedTypeormRepository,
    UserTypeormRepository,
    FeedCommentTypeormRepository,
    FeedLikeTypeormRepository,
    FeedVideoTypeormRepository,
    ProfileTypeormRepository,
    ProfileProjectTypeormRepository,
    ProfileExperienceTypeormRepository,
    ProfileEducationTypeormRepository,
    ProfileWebsiteTypeormRepository,
  ],
  exports: [
    FeedTypeormRepository,
    UserTypeormRepository,
    FeedCommentTypeormRepository,
    FeedLikeTypeormRepository,
    FeedVideoTypeormRepository,
    ProfileTypeormRepository,
    ProfileProjectTypeormRepository,
    ProfileExperienceTypeormRepository,
    ProfileEducationTypeormRepository,
    ProfileWebsiteTypeormRepository,
  ],
})
export class TypeormRepositoryModule {}
