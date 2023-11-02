import { Controller, Get, Inject } from '@nestjs/common';
import { IFeedService } from 'src/domain/service/feed/feed.service.interface';
import { FEED_SERVICE } from 'src/domain/service/ioc';
import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';

@Controller('/feed')
export class FeedController {
  constructor(
    @Inject(FEED_SERVICE) private readonly feedService: IFeedService,
  ) {}

  @Get()
  async getAll(): Promise<FeedVo[]> {
    return await this.feedService.getAll();
  }
}
