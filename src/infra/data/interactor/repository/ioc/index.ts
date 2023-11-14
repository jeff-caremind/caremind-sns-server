import { Provider } from '@nestjs/common';

import { IFeedRepository } from 'src/domain/interactor/data/repository/feed.repository.interface';
import { IUserRepository } from 'src/domain/interactor/data/repository/user.repository.interface';
import { IFeedCommentRepository } from 'src/domain/interactor/data/repository/feed_comment.repository.interface';
import { IFeedLikeRepository } from 'src/domain/interactor/data/repository/feed_like.repository.interface';
import { IFeedVideoRepository } from 'src/domain/interactor/data/repository/feed_video.repository.interface';
import { IProfileRepository } from 'src/domain/interactor/data/repository/profile.repository.interface';
import { IProfileProjectRepository } from 'src/domain/interactor/data/repository/profile_project.repository.interface';
import { IProfileExperienceRepository } from 'src/domain/interactor/data/repository/profile_experience.repository.interface';
import { IProfileEducationRepository } from 'src/domain/interactor/data/repository/profile_education.repository.interface';
import { IProfileWebsiteRepository } from 'src/domain/interactor/data/repository/profile_website.repository.interface';
import { IUserConnectionRepository } from 'src/domain/interactor/data/repository/user_connection.repository.interface';
import { FeedRepositoryImpl } from '../feed/feed.repository.implement';
import { UserRepositoryImpl } from '../user/user.repository.implement';
import { FeedCommentRepositoryImpl } from '../feed_comment/feed_comment.repository.implement';
import { FeedLikeRepositoryImpl } from '../feed_like/feed_like.repository.implement';
import { FeedVideoRepositoryImpl } from '../feed_video/feed_video.repository.implement';
import { IUserConnectionRepository } from 'src/domain/interactor/data/repository/user_connection.repository.interface';
import { UserConnectionRepositoryImpl } from '../connection/user_connection.repository.implement';
import { ProfileRepositoryImpl } from '../profile/profile.repository.implement';
import { ProfileProjectRepositoryImpl } from '../profile_project/profile_project.repository.implement';
import { ProfileExperienceRepositoryImpl } from '../profile_experience/profile_experience.repository.implement';
import { ProfileEducationRepositoryImpl } from '../profile_education/profile_education.repository.implement';
import { ProfileWebsiteRepositoryImpl } from '../profile_website/profile_website.repository.implement';
import { UserConnectionRepositoryImpl } from '../user_connection/user_connection.repository.implement';

export const FEED_REPOSITORY = Symbol.for('FEED_REPOSITORY');
export const FeedRepository: Provider<IFeedRepository> = {
  provide: FEED_REPOSITORY,
  useClass: FeedRepositoryImpl,
};

export const USER_REPOSITORY = Symbol.for('USER_REPOSITORY');
export const UserRepository: Provider<IUserRepository> = {
  provide: USER_REPOSITORY,
  useClass: UserRepositoryImpl,
};

export const FEED_COMMENT_REPOSITORY = Symbol.for('FEED_COMMENT_REPOSITORY');
export const FeedCommentRepository: Provider<IFeedCommentRepository> = {
  provide: FEED_COMMENT_REPOSITORY,
  useClass: FeedCommentRepositoryImpl,
};

export const FEED_LIKE_REPOSITORY = Symbol.for('FEED_LIKE_REPOSITORY');
export const FeedLikeRepository: Provider<IFeedLikeRepository> = {
  provide: FEED_LIKE_REPOSITORY,
  useClass: FeedLikeRepositoryImpl,
};

export const FEED_VIDEO_REPOSITORY = Symbol.for('FEED_VIDEO_REPOSITORY');
export const FeedVideoRepository: Provider<IFeedVideoRepository> = {
  provide: FEED_VIDEO_REPOSITORY,
  useClass: FeedVideoRepositoryImpl,
};

export const PROFILE_REPOSITORY = Symbol.for('PROFILE_REPOSITORY');
export const ProfileRepository: Provider<IProfileRepository> = {
  provide: PROFILE_REPOSITORY,
  useClass: ProfileRepositoryImpl,
};

export const PROFILE_PROJECT_REPOSITORY = Symbol.for(
  'PROFILE_PROJECT_REPOSITORY',
);
export const ProfileProjectRepository: Provider<IProfileProjectRepository> = {
  provide: PROFILE_PROJECT_REPOSITORY,
  useClass: ProfileProjectRepositoryImpl,
};

export const PROFILE_EXPERIENCE_REPOSITORY = Symbol.for(
  'PROFILE_EXPERIENCE_REPOSITORY',
);
export const ProfileExperienceRepository: Provider<IProfileExperienceRepository> =
  {
    provide: PROFILE_EXPERIENCE_REPOSITORY,
    useClass: ProfileExperienceRepositoryImpl,
  };

export const PROFILE_EDUCATION_REPOSITORY = Symbol.for(
  'PROFILE_EDUCATION_REPOSITORY',
);
export const ProfileEducationRepository: Provider<IProfileEducationRepository> =
  {
    provide: PROFILE_EDUCATION_REPOSITORY,
    useClass: ProfileEducationRepositoryImpl,
  };

export const PROFILE_WEBSITE_REPOSITORY = Symbol.for(
  'PROFILE_WEBSITE_REPOSITORY',
);
export const ProfileWebsiteRepository: Provider<IProfileWebsiteRepository> = {
  provide: PROFILE_WEBSITE_REPOSITORY,
  useClass: ProfileWebsiteRepositoryImpl,
  };
  
export const USER_CONNECTION_REPOSITORY = Symbol.for(
  'USER_CONNECTION_REPOSITORY',
);
export const UserConnectionRepository: Provider<IUserConnectionRepository> = {
  provide: USER_CONNECTION_REPOSITORY,
  useClass: UserConnectionRepositoryImpl,
};
