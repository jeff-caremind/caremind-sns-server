import { FeedCommentVo } from 'src/infra/data/typeorm/vo/feed_comment.vo';

export interface IFeedCommentRepository {
  createComment(feed: FeedCommentVo): Promise<void>;
}
