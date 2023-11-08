import { FeedCommentVo } from 'src/infra/data/typeorm/vo/feed_comment.vo';
import { FeedImageVo } from 'src/infra/data/typeorm/vo/feed_image.vo';
import { FeedLikeVo } from 'src/infra/data/typeorm/vo/feed_like.vo';
import { FeedVideoVo } from 'src/infra/data/typeorm/vo/feed_video.vo';
import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';

export type FeedWithRelationsDto = {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  author: UserVo;
  images: FeedImageVo[];
  video: FeedVideoVo | null;
  likes: FeedLikeVo[];
  comments: FeedCommentVo[];
};

export type FeedWithRelationsAndCount = FeedWithRelationsDto & {
  likesCount: number;
  commentsCount: number;
};

export type FeedsDto = FeedWithRelationsAndCount[];

export type FeedLikeDto = {
  likerId: number;
  likedFeedId: number;
};

export type FeedCreateDto = {
  userId: number;
  content?: string;
  images?: string[];
  video?: string;
};

export type FeedCommentDto = {
  userId: number;
  feedId: number;
  content: string;
};

export type FeedDeleteDto = {
  userId: number;
  feedId: number;
};
