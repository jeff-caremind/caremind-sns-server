import { FeedLikeDto } from 'src/domain/service/dto/feed.dto';
import { FeedLikeVo } from 'src/infra/data/typeorm/vo/feed_like.vo';

export interface IFeedLikeRepository {
  createLike(feedLikeDto: FeedLikeDto): Promise<void>;
  findLike(feedLikeDto: FeedLikeDto): Promise<FeedLikeVo | null>;
}
