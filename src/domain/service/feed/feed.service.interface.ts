import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';
import { FeedsListDto, FeedCreateDto, FeedCommentDto } from '../dto/feed.dto';

export interface IFeedService {
  getAll(): Promise<FeedsListDto>;
  createComment(feedCommentDto: FeedCommentDto): Promise<void>;
  createFeed(feedCreateDto: FeedCreateDto): Promise<void>;
}
