import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';

export interface IFeedRepository {
  findAll(): Promise<FeedVo[]>;
  findOneById(feedId: number): Promise<FeedVo | null>;
}
