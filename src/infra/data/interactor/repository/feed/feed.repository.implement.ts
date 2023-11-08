import { Inject, Injectable } from '@nestjs/common';
import { FindOptionsRelations, FindOptionsSelect, Repository } from 'typeorm';

import { IFeedRepository } from 'src/domain/interactor/data/repository/feed.repository.interface';
import { FEED_TYPEORM_REPOSITORY } from 'src/infra/data/typeorm/repository/ioc';
import { FeedVo } from '../../../typeorm/vo/feed.vo';

@Injectable()
export class FeedRepositoryImpl implements IFeedRepository {
  constructor(
    @Inject(FEED_TYPEORM_REPOSITORY)
    private readonly feedTypeormRepository: Repository<FeedVo>,
  ) {}

  async findAll(): Promise<FeedVo[]> {
    return this.feedTypeormRepository.find({
      relations: this.feedFullRelations,
      select: this.feedFullRelationsSelect,
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

  async findOneWithAuthorById(feedId: number): Promise<FeedVo | null> {
    const [feed] = await this.feedTypeormRepository.find({
      relations: {
        author: true,
      },
      where: { id: feedId },
    });
    return feed;
  }

  async findOneWithRelationsById(feedId: number): Promise<FeedVo | null> {
    const [feed] = await this.feedTypeormRepository.find({
      where: { id: feedId },
      relations: this.feedFullRelations,
      select: this.feedFullRelationsSelect,
    });
    return feed;
  }

  async remove(feed: FeedVo) {
    await this.feedTypeormRepository.remove(feed);
  }

  private feedFullRelations: FindOptionsRelations<FeedVo> = {
    author: true,
    likes: true,
    images: true,
    video: true,
    comments: {
      commenter: true,
    },
  };

  private feedFullRelationsSelect: FindOptionsSelect<FeedVo> = {
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
  };
}
