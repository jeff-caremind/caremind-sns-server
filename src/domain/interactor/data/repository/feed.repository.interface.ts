import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';

export interface IFeedRepository {
  findAll(): Promise<FeedVo[]>;
  create(feed: FeedVo): Promise<void>;
}
