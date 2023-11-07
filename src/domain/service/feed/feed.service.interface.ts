import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';
import { FeedsListDto, FeedCreateDto } from '../dto/feed.dto';

export interface IFeedService {
  getAll(): Promise<FeedsListDto>;
  createFeed(feedCreateDto: FeedCreateDto): Promise<void>;
}
