import { Provider } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { DATA_SOURCE } from '../../config/typeorm.config';
import { FeedVo } from '../../vo/feed.vo';
import { UserVo } from '../../vo/user.vo';
import { FeedCommentVo } from '../../vo/feed_comment.vo';
import { FeedLikeVo } from '../../vo/feed_like.vo';
import { FeedVideoVo } from '../../vo/feed_video.vo';
import { ProfileVo } from '../../vo/profile.vo';
import { ProfileProjectVo } from '../../vo/profile_project.vo';
import { ProfileExperienceVo } from '../../vo/profile_experience.vo';
import { ProfileEducationVo } from '../../vo/profile_education.vo';
import { ProfileWebsiteVo } from '../../vo/profile_website.vo';
import { UserConnectionVo } from '../../vo/user_connection.vo';

export const FEED_TYPEORM_REPOSITORY = Symbol.for('FEED_TYPEORM_REPOSITORY');
export const FeedTypeormRepository: Provider<Repository<FeedVo>> = {
  provide: FEED_TYPEORM_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(FeedVo),
  inject: [DATA_SOURCE],
};

export const USER_TYPEORM_REPOSITORY = Symbol.for('USER_TYPEORM_REPOSITORY');
export const UserTypeormRepository: Provider<Repository<UserVo>> = {
  provide: USER_TYPEORM_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(UserVo),
  inject: [DATA_SOURCE],
};

export const FEED_COMMENT_TYPEORM_REPOSITORY = Symbol.for(
  'FEED_COMMENT_TYPEORM_REPOSITORY',
);
export const FeedCommentTypeormRepository: Provider<Repository<FeedCommentVo>> =
  {
    provide: FEED_COMMENT_TYPEORM_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(FeedCommentVo),
    inject: [DATA_SOURCE],
  };

export const FEED_LIKE_TYPEORM_REPOSITORY = Symbol.for(
  'FEED_LIKE_TYPEORM_REPOSITORY',
);
export const FeedLikeTypeormRepository: Provider<Repository<FeedLikeVo>> = {
  provide: FEED_LIKE_TYPEORM_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(FeedLikeVo),
  inject: [DATA_SOURCE],
};

export const FEED_VIDEO_TYPEORM_REPOSITORY = Symbol.for(
  'FEED_VIDEO_TYPEORM_REPOSITORY',
);
export const FeedVideoTypeormRepository: Provider<Repository<FeedVideoVo>> = {
  provide: FEED_VIDEO_TYPEORM_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(FeedVideoVo),
  inject: [DATA_SOURCE],
};

export const PROFILE_TYPEORM_REPOSITORY = Symbol.for(
  'PROFILE_TYPEORM_REPOSITORY',
);
export const ProfileTypeormRepository: Provider<Repository<ProfileVo>> = {
  provide: PROFILE_TYPEORM_REPOSITORY,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(ProfileVo),
  inject: [DATA_SOURCE],
};

export const PROFILE_PROJECT_TYPEORM_REPOSITORY = Symbol.for(
  'PROFILE_PROJECT_TYPEORM_REPOSITORY',
);
export const ProfileProjectTypeormRepository: Provider<
  Repository<ProfileProjectVo>
> = {
  provide: PROFILE_PROJECT_TYPEORM_REPOSITORY,
  useFactory: (dataSource: DataSource) =>
    dataSource.getRepository(ProfileProjectVo),
  inject: [DATA_SOURCE],
};

export const PROFILE_EXPERIENCE_TYPEORM_REPOSITORY = Symbol.for(
  'PROFILE_EXPERIENCE_TYPEORM_REPOSITORY',
);
export const ProfileExperienceTypeormRepository: Provider<
  Repository<ProfileExperienceVo>
> = {
  provide: PROFILE_EXPERIENCE_TYPEORM_REPOSITORY,
  useFactory: (dataSource: DataSource) =>
    dataSource.getRepository(ProfileExperienceVo),
  inject: [DATA_SOURCE],
};

export const PROFILE_EDUCATION_TYPEORM_REPOSITORY = Symbol.for(
  'PROFILE_EDUCATION_TYPEORM_REPOSITORY',
);
export const ProfileEducationTypeormRepository: Provider<
  Repository<ProfileEducationVo>
> = {
  provide: PROFILE_EDUCATION_TYPEORM_REPOSITORY,
  useFactory: (dataSource: DataSource) =>
    dataSource.getRepository(ProfileEducationVo),
  inject: [DATA_SOURCE],
};

export const PROFILE_WEBSITE_TYPEORM_REPOSITORY = Symbol.for(
  'PROFILE_WEBSITE_TYPEORM_REPOSITORY',
);
export const ProfileWebsiteTypeormRepository: Provider<
  Repository<ProfileWebsiteVo>
> = {
  provide: PROFILE_WEBSITE_TYPEORM_REPOSITORY,
  useFactory: (dataSource: DataSource) =>
    dataSource.getRepository(ProfileWebsiteVo),
  inject: [DATA_SOURCE],
};

export const USER_CONNECTION_TYPEORM_REPOSITORY = Symbol.for(
  'USER_CONNECTION_TYPEORM_REPOSITORY',
);
export const UserConnectionTypeormRepository: Provider<
  Repository<UserConnectionVo>
> = {
  provide: USER_CONNECTION_TYPEORM_REPOSITORY,
  useFactory: (dataSource: DataSource) =>
    dataSource.getRepository(UserConnectionVo),
  inject: [DATA_SOURCE],
};
