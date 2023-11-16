import { FeedTagVo } from 'src/infra/data/typeorm/vo/feed_tag.vo';

export interface IFeedTagRepository {
  findAll(tags: string[]): Promise<FeedTagVo[]>;
}
