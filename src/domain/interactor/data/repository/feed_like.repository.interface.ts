import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';
import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';

export interface IFeedLikeRepository {
  createLike(liker: UserVo, likedFeed: FeedVo): Promise<void>;
}
