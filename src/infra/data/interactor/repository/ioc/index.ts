import { Provider } from '@nestjs/common';

import { IFeedRepository } from 'src/domain/interactor/data/repository/feed.repository.interface';
import { IUserRepository } from 'src/domain/interactor/data/repository/user.repository.interface';
import { IFeedCommentRepository } from 'src/domain/interactor/data/repository/feed_comment.repository.interface';
import { IFeedLikeRepository } from 'src/domain/interactor/data/repository/feed_like.repository.interface';
import { FeedRepositoryImpl } from '../feed/feed.repository.implement';
import { UserRepositoryImpl } from '../user/user.repository.implement';
import { FeedCommentRepositoryImpl } from '../feed_comment/feed_comment.repository.implement';
import { FeedLikeRepositoryImpl } from '../feed_like/feed_like.repository.implement';
import { IFeedVideoRepository } from 'src/domain/interactor/data/repository/feed_video.repository.interface';
import { FeedVideoRepositoryImpl } from '../feed_video/feed_video.repository.implement';

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
