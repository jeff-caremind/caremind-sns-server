import { Inject, Injectable } from '@nestjs/common';
import { FEED_LIKE_TYPEORM_REPOSITORY } from 'src/infra/data/typeorm/repository/ioc';
import { Repository } from 'typeorm';
import { IFeedLikeRepository } from 'src/domain/interactor/data/repository/feed_like.repository.interface';
import { FeedLikeVo } from 'src/infra/data/typeorm/vo/feed_like.vo';
import { FeedLikeDto } from 'src/domain/service/dto/feed.dto';

@Injectable()
export class FeedLikeRepositoryImpl implements IFeedLikeRepository {
  constructor(
    @Inject(FEED_LIKE_TYPEORM_REPOSITORY)
    private readonly feedLikeTypeormRepository: Repository<FeedLikeVo>,
  ) {}

  async createLike(feedLikeDto: FeedLikeDto): Promise<void> {
    const newLike = this.feedLikeTypeormRepository.create({
      likedFeedId: feedLikeDto.likedFeedId,
      likerId: feedLikeDto.likerId,
    });
    await this.feedLikeTypeormRepository.save(newLike);
  }
}
