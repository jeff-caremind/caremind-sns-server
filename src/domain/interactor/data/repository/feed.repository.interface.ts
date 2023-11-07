import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';

export interface IFeedRepository {
  findAll(): Promise<FeedVo[]>;
  findOneById(feedId: number): Promise<FeedVo | null>;
  findOneWithAuthorById(feedId: number): Promise<FeedVo | null>;
  create(feed: FeedVo): Promise<void>;
  update(updatedFeed: FeedVo): Promise<void>;
  findOneWithRelationsById(feedId: number): Promise<FeedVo | null>;
}
