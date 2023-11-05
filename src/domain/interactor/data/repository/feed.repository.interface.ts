import { FeedLikeDto } from 'src/domain/service/dto/feed.dto';
import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';

export interface IFeedRepository {
  findAll(): Promise<FeedVo[]>;
  createLike(feedLikeDto: FeedLikeDto): Promise<void>;
}
