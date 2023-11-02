import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';

export class FeedVoWithCounts extends FeedVo {
  constructor() {
    super();
  }
  likesCount: number;
  commentsCount: number;
}

export type FeedsListDto = FeedVoWithCounts[];
