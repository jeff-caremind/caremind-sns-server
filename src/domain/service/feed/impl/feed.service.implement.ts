import { Inject, Injectable } from '@nestjs/common';
import { IFeedService } from '../feed.service.interface';
import { FEED_REPOSITORY } from 'src/infra/data/interactor/repository/ioc';
import { IFeedRepository } from 'src/domain/interactor/data/repository/feed.repository.interface';
import { FeedsListDto } from '../../dto/feed.dto';

@Injectable()
export class FeedServiceImpl implements IFeedService {
  constructor(
    @Inject(FEED_REPOSITORY) private readonly feedRepository: IFeedRepository,
  ) {}

  async getAll() {
    const feeds = await this.feedRepository.findAll();
    const feedsList = feeds as FeedsListDto;
    feedsList.forEach((feed) => {
      feed.likesCount = feed.likes.length;
      feed.commentsCount = feed.comments.length;
    });
    return feedsList;
  }
}
