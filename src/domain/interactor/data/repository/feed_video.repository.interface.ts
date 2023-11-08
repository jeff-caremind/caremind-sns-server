import { FeedVideoVo } from 'src/infra/data/typeorm/vo/feed_video.vo';

export interface IFeedVideoRepository {
  remove(feedVideoVo: FeedVideoVo): Promise<void>;
}
