import { Inject, Injectable } from '@nestjs/common';
import {
  FEED_LIKE_TYPEORM_REPOSITORY,
  FEED_TYPEORM_REPOSITORY,
  USER_TYPEORM_REPOSITORY,
} from 'src/infra/data/typeorm/repository/ioc';
import { Repository } from 'typeorm';
import { IFeedLikeRepository } from 'src/domain/interactor/data/repository/feed_like.repository.interface';
import { FeedLikeVo } from 'src/infra/data/typeorm/vo/feed_like.vo';
import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';
import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';

@Injectable()
export class FeedLikeRepositoryImpl implements IFeedLikeRepository {
  constructor(
    @Inject(FEED_LIKE_TYPEORM_REPOSITORY)
    private readonly feedLikeTypeormRepository: Repository<FeedLikeVo>,
    @Inject(FEED_TYPEORM_REPOSITORY)
    private readonly feedTypeormRepository: Repository<FeedVo>,
    @Inject(USER_TYPEORM_REPOSITORY)
    private readonly userTypeormRepository: Repository<UserVo>,
  ) {}

  async createLike(liker: UserVo, likedFeed: FeedVo): Promise<void> {
    const newFeedLike = new FeedLikeVo();
    newFeedLike.likedFeed = likedFeed;
    newFeedLike.liker = liker;
    await this.feedLikeTypeormRepository.save(newFeedLike);
  }
}
