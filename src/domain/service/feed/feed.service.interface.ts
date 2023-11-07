import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';
import { FeedLikeDto, FeedsListDto } from '../dto/feed.dto';

export interface IFeedService {
  getAll(): Promise<FeedsListDto>;
  likeFeed(feedLikeDto: FeedLikeDto): Promise<void>;
}
