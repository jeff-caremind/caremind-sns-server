import { Module } from '@nestjs/common';

import { TypeormRepositoryModule } from 'src/infra/data/typeorm/repository/module/typeorm.repository.module';
import * as IOC from '../ioc';

@Module({
  imports: [TypeormRepositoryModule],
  providers: [
    IOC.FeedRepository,
    IOC.UserRepository,
    IOC.ProfileRepository,
    IOC.FeedCommentRepository,
    IOC.FeedLikeRepository,
    IOC.ProfileProjectRepository,
    IOC.ProfileExperienceRepository,
    IOC.ProfileEducationRepository,
    IOC.ProfileWebsiteRepository,
  ],
  exports: [
    IOC.FeedRepository,
    IOC.UserRepository,
    IOC.ProfileRepository,
    IOC.FeedCommentRepository,
    IOC.FeedLikeRepository,
    IOC.ProfileProjectRepository,
    IOC.ProfileExperienceRepository,
    IOC.ProfileEducationRepository,
    IOC.ProfileWebsiteRepository,
  ],
})
export class RepositoryModule {}
