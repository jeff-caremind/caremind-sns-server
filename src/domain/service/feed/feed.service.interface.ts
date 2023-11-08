import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';
import {
  FeedLikeDto,
  FeedsListDto,
  FeedCreateDto,
  FeedCommentDto,
} from '../dto/feed.dto';

export interface IFeedService {
  getAll(): Promise<FeedsListDto>;
  createComment(feedCommentDto: FeedCommentDto): Promise<void>;
  createLike(feedLikeDto: FeedLikeDto): Promise<void>;
  createFeed(feedCreateDto: FeedCreateDto): Promise<void>;
  updateFeed(feedId: number, feedUpdateDto: FeedCreateDto): Promise<void>;
  getOne(feedId: number): Promise<FeedVo>;
  deleteLike(feedLikeDto: FeedLikeDto): Promise<void>;
}
