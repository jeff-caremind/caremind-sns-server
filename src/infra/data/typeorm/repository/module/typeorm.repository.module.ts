import { Module } from '@nestjs/common';
import { TypeormConfigModule } from '../../config/typeorm.config';
import {
  FeedTypeormRepository,
  UserTypeormRepository,
  ProfileTypeormRepository,
  FeedCommentTypeormRepository,
  FeedLikeTypeormRepository,
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
    ProfileTypeormRepository,
    FeedCommentTypeormRepository,
    FeedLikeTypeormRepository,
    ProfileProjectTypeormRepository,
    ProfileExperienceTypeormRepository,
    ProfileEducationTypeormRepository,
    ProfileWebsiteTypeormRepository,
  ],
  exports: [
    FeedTypeormRepository,
    UserTypeormRepository,
    ProfileTypeormRepository,
    FeedCommentTypeormRepository,
    FeedLikeTypeormRepository,
    ProfileProjectTypeormRepository,
    ProfileExperienceTypeormRepository,
    ProfileEducationTypeormRepository,
    ProfileWebsiteTypeormRepository,
  ],
})
export class TypeormRepositoryModule {}
