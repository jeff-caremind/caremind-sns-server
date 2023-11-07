import { Inject, Injectable } from '@nestjs/common';
import { IFeedRepository } from 'src/domain/interactor/data/repository/feed.repository.interface';
import {
  FEED_TYPEORM_REPOSITORY,
  USER_TYPEORM_REPOSITORY,
} from 'src/infra/data/typeorm/repository/ioc';
import { Repository } from 'typeorm';
import { FeedVo } from '../../../typeorm/vo/feed.vo';
import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';

@Injectable()
export class FeedRepositoryImpl implements IFeedRepository {
  constructor(
    @Inject(FEED_TYPEORM_REPOSITORY)
    private readonly feedTypeormRepository: Repository<FeedVo>,
    @Inject(USER_TYPEORM_REPOSITORY)
    private readonly userTypeormRepository: Repository<UserVo>,
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

  async findOneById(feedId: number): Promise<FeedVo | null> {
    return await this.feedTypeormRepository.findOneBy({ id: feedId });
  }

  async create(feed: FeedVo): Promise<void> {
    await this.feedTypeormRepository.save(feed);
  }

  async update(updatedFeed: FeedVo) {
    await this.feedTypeormRepository.save(updatedFeed);
  }
}
