import {
  FeedLikeDto,
  FeedsListDto,
  FeedCreateDto,
  FeedCommentDto,
} from '../dto/feed.dto';

export interface IFeedService {
  getAll(): Promise<FeedsListDto>;
  createComment(feedCommentDto: FeedCommentDto): Promise<void>;
  likeFeed(feedLikeDto: FeedLikeDto): Promise<void>;
  createFeed(feedCreateDto: FeedCreateDto): Promise<void>;
  updateFeed(feedId: number, feedUpdateDto: FeedCreateDto): Promise<void>;
}
