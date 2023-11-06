import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';

import { IFeedService } from '../feed.service.interface';
import {
  FEED_LIKE_REPOSITORY,
  FEED_REPOSITORY,
  USER_REPOSITORY,
} from 'src/infra/data/interactor/repository/ioc';
import { IFeedRepository } from 'src/domain/interactor/data/repository/feed.repository.interface';
import { FeedLikeDto } from '../../dto/feed.dto';
import { IFeedLikeRepository } from 'src/domain/interactor/data/repository/feed_like.repository.interface';
import { IUserRepository } from 'src/domain/interactor/data/repository/user.repository.interface';

@Injectable()
export class FeedServiceImpl implements IFeedService {
  constructor(
    @Inject(FEED_REPOSITORY) private readonly feedRepository: IFeedRepository,
    @Inject(FEED_LIKE_REPOSITORY)
    private readonly feedLikeRepository: IFeedLikeRepository,
    @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
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

    const liker = await this.userRepository.findOneById(feedLikeDto.likerId);
    const likedFeed = await this.feedRepository.findOneById(
      feedLikeDto.likedFeedId,
    );

    if (!liker || !likedFeed)
      throw new HttpException('CONTENT_NOT_FOUND', HttpStatus.NOT_FOUND);

    return await this.feedLikeRepository.createLike(liker, likedFeed);
  }
}
