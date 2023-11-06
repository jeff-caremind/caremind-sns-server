import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';
import { FeedCreateDto } from '../dto/feed.dto';

export interface IFeedService {
  getAll(): Promise<FeedVo[]>;
  createFeed(feedCreateDto: FeedCreateDto): Promise<void>;
}
