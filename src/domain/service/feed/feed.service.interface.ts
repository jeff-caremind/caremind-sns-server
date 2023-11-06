import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';
import { FeedCommentDto } from '../dto/feed.dto';

export interface IFeedService {
  getAll(): Promise<FeedVo[]>;
  createComment(feedCommentDto: FeedCommentDto): Promise<void>;
}
