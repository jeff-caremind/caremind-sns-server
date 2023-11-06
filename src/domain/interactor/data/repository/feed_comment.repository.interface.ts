import { FeedCommentVo } from 'src/infra/data/typeorm/vo/feed_comment.vo';

export interface IFeedCommentRepository {
  create(feed: FeedCommentVo): Promise<void>;
}
