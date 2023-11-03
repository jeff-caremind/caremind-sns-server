import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';
import { FeedLikeDto } from '../dto/feed.dto';

export interface IFeedService {
  getAll(): Promise<FeedVo[]>;
  likeFeed(feedLikeDto: FeedLikeDto): Promise<void>;
}
