import { FeedCommentVo } from 'src/infra/data/typeorm/vo/feed_comment.vo';
import { FeedImageVo } from 'src/infra/data/typeorm/vo/feed_image.vo';
import { FeedLikeVo } from 'src/infra/data/typeorm/vo/feed_like.vo';
import { FeedVideoVo } from 'src/infra/data/typeorm/vo/feed_video.vo';
import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';

export type FeedListItem = {
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

export type FeedListItemWithcount = FeedListItem & {
  likesCount: number;
  commentsCount: number;
};

export type FeedsListDto = FeedListItemWithcount[];
