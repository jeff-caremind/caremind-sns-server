import { Inject, Injectable } from '@nestjs/common';

import { IFeedLikeRepository } from 'src/domain/interactor/data/repository/feed_like.repository.interface';
import { FeedLikeDto } from 'src/domain/service/dto/feed.dto';
import { FEED_LIKE_TYPEORM_REPOSITORY } from 'src/infra/data/typeorm/repository/ioc';
import { FeedLikeVo } from 'src/infra/data/typeorm/vo/feed_like.vo';
import { Repository } from 'typeorm';

@Injectable()
export class FeedLikeRepositoryImpl implements IFeedLikeRepository {
  constructor(
    @Inject(FEED_LIKE_TYPEORM_REPOSITORY)
    private readonly feedLikeTypeormRepository: Repository<FeedLikeVo>,
  ) {}

  async createLike(feedLikeDto: FeedLikeDto): Promise<void> {
    await this.feedLikeTypeormRepository.save(feedLikeDto);
    return;
  }

  async findLike(feedLikeDto: FeedLikeDto): Promise<FeedLikeVo | null> {
    return await this.feedLikeTypeormRepository.findOneBy(feedLikeDto);
  }
}
