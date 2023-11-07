import { Inject, Injectable } from '@nestjs/common';
import { IFeedRepository } from 'src/domain/interactor/data/repository/feed.repository.interface';
import { FEED_TYPEORM_REPOSITORY } from 'src/infra/data/typeorm/repository/ioc';
import { Repository } from 'typeorm';
import { FeedVo } from '../../../typeorm/vo/feed.vo';

@Injectable()
export class FeedRepositoryImpl implements IFeedRepository {
  constructor(
    @Inject(FEED_TYPEORM_REPOSITORY)
    private readonly feedTypeormRepository: Repository<FeedVo>,
  ) {}

  async findAll(): Promise<FeedVo[]> {
    return this.feedTypeormRepository.find({
      relations: {
        author: true,
        likes: true,
        images: true,
        video: true,
        comments: {
          commenter: true,
        },
      },
      select: {
        author: {
          id: true,
          name: true,
        },
        images: {
          id: true,
          imageUrl: true,
        },
        video: {
          id: true,
          videoUrl: true,
        },
        comments: {
          id: true,
          content: true,
          createdAt: true,
          updatedAt: true,
          commenter: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async createFeed(feed: FeedVo): Promise<void> {
    await this.feedTypeormRepository.save(feed);
  }
}
