import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';

export interface IFeedService {
  getAll(): Promise<FeedVo[]>;
}
