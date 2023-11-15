import { Module } from '@nestjs/common';

import { TypeormRepositoryModule } from 'src/infra/data/typeorm/repository/module/typeorm.repository.module';
import * as IOC from '../ioc';

@Module({
  imports: [TypeormRepositoryModule],
  providers: [
    IOC.FeedRepository,
    IOC.UserRepository,
    IOC.FeedCommentRepository,
    IOC.FeedLikeRepository,
    IOC.FeedVideoRepository,
    IOC.FeedTagRepository,
    IOC.ProfileRepository,
    IOC.ProfileProjectRepository,
    IOC.ProfileExperienceRepository,
    IOC.ProfileEducationRepository,
    IOC.ProfileWebsiteRepository,
    IOC.UserConnectionRepository,
  ],
  exports: [
    IOC.FeedRepository,
    IOC.UserRepository,
    IOC.FeedCommentRepository,
    IOC.FeedLikeRepository,
    IOC.FeedVideoRepository,
    IOC.FeedTagRepository,
    IOC.ProfileRepository,
    IOC.ProfileProjectRepository,
    IOC.ProfileExperienceRepository,
    IOC.ProfileEducationRepository,
    IOC.ProfileWebsiteRepository,
    IOC.UserConnectionRepository,
  ],
})
export class RepositoryModule {}
