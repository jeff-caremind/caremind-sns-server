import { FeedLikeDto } from 'src/domain/service/dto/feed.dto';

export interface IFeedLikeRepository {
  createLike(feedLikeDto: FeedLikeDto): Promise<void>;
}
