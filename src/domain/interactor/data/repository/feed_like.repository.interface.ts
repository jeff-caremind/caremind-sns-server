import { FeedLikeVo } from 'src/infra/data/typeorm/vo/feed_like.vo';

export interface IFeedLikeRepository {
  create(feedLikeVo: FeedLikeVo): Promise<void>;
}
