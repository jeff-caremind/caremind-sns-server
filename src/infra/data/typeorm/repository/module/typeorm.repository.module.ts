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
  UserConnectionTypeormRepository,
  FeedTagTypeormRepository,
  TagTypeormRepository,
} from '../ioc';

@Module({
  imports: [TypeormConfigModule],
  providers: [
    FeedTypeormRepository,
    UserTypeormRepository,
    FeedCommentTypeormRepository,
    FeedLikeTypeormRepository,
    FeedVideoTypeormRepository,
    FeedTagTypeormRepository,
    ProfileTypeormRepository,
    ProfileProjectTypeormRepository,
    ProfileExperienceTypeormRepository,
    ProfileEducationTypeormRepository,
    ProfileWebsiteTypeormRepository,
    UserConnectionTypeormRepository,
    TagTypeormRepository,
  ],
  exports: [
    FeedTypeormRepository,
    UserTypeormRepository,
    FeedCommentTypeormRepository,
    FeedLikeTypeormRepository,
    FeedVideoTypeormRepository,
    FeedTagTypeormRepository,
    ProfileTypeormRepository,
    ProfileProjectTypeormRepository,
    ProfileExperienceTypeormRepository,
    ProfileEducationTypeormRepository,
    ProfileWebsiteTypeormRepository,
    UserConnectionTypeormRepository,
    TagTypeormRepository,
  ],
})
export class TypeormRepositoryModule {}
