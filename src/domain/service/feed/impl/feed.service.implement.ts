import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';

import { IFeedService } from '../feed.service.interface';
import {
  FEED_LIKE_REPOSITORY,
  FEED_REPOSITORY,
} from 'src/infra/data/interactor/repository/ioc';
import { IFeedRepository } from 'src/domain/interactor/data/repository/feed.repository.interface';
import { IFeedLikeRepository } from 'src/domain/interactor/data/repository/feed_like.repository.interface';
import { FeedLikeDto } from '../../dto/feed.dto';

@Injectable()
export class FeedServiceImpl implements IFeedService {
  constructor(
    @Inject(FEED_REPOSITORY) private readonly feedRepository: IFeedRepository,
    @Inject(FEED_LIKE_REPOSITORY)
    private readonly feedLikeRepository: IFeedLikeRepository,
  ) {}

  async getAll() {
    return await this.feedRepository.findAll();
  }

  async likeFeed(feedLikeDto: FeedLikeDto): Promise<void> {
    if (
      typeof feedLikeDto.likedFeedId !== 'number' ||
      typeof feedLikeDto.likerId !== 'number'
    )
      throw new HttpException('KEY_ERROR', HttpStatus.BAD_REQUEST);
    const existingLike = await this.feedLikeRepository.findLike(feedLikeDto);
    if (existingLike)
      throw new HttpException('DUPLICATE_LIKE', HttpStatus.BAD_REQUEST);
    return await this.feedLikeRepository.createLike(feedLikeDto);
  }
}
