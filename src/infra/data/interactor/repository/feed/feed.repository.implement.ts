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
    return this.feedTypeormRepository
      .createQueryBuilder('feed')
      .leftJoin('feed.author', 'user')
      .addSelect(['user.id', 'user.name'])
      .leftJoin('feed.images', 'images')
      .addSelect(['images.imageUrl'])
      .leftJoin('feed.video', 'video')
      .addSelect(['video.videoUrl'])
      .leftJoin('feed.likes', 'feed_like')
      .leftJoin('feed_like.liker', 'liker')
      .addSelect(['feed_like.id', 'liker.id', 'liker.name'])
      .leftJoin('feed.comments', 'feed_comment')
      .leftJoin('feed_comment.commenter', 'commenter')
      .addSelect([
        'feed_comment.id',
        'feed_comment.content',
        'commenter.id',
        'commenter.name',
      ])
      .getMany();
  }
}
