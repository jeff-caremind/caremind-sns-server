import { Inject, Injectable } from '@nestjs/common';
import { IFeedService } from '../feed.service.interface';
import { FEED_REPOSITORY } from 'src/infra/data/interactor/repository/ioc';
import { IFeedRepository } from 'src/domain/interactor/data/repository/repository.inteface';

@Injectable()
export class FeedServiceImpl implements IFeedService {
  constructor(
    @Inject(FEED_REPOSITORY) private readonly feedRepository: IFeedRepository,
  ) {}

  async getAll() {
    return await this.feedRepository.findAll();
  }
}
