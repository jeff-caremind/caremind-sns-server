import { Inject, Injectable } from '@nestjs/common';
import { FEED_VIDEO_TYPEORM_REPOSITORY } from 'src/infra/data/typeorm/repository/ioc';
import { Repository } from 'typeorm';
import { FeedVideoVo } from 'src/infra/data/typeorm/vo/feed_video.vo';
import { IFeedVideoRepository } from 'src/domain/interactor/data/repository/feed_video.repository.interface';

@Injectable()
export class FeedVideoRepositoryImpl implements IFeedVideoRepository {
  constructor(
    @Inject(FEED_VIDEO_TYPEORM_REPOSITORY)
    private readonly feedVideoTypeormRepository: Repository<FeedVideoVo>,
  ) {}

  async remove(videoVo: FeedVideoVo): Promise<void> {
    await this.feedVideoTypeormRepository.remove(videoVo);
  }
}
