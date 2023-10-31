import { Controller, Get, Inject } from '@nestjs/common';
import { IFeedService } from 'src/domain/service/feed/feed.service.interface';
import { FEED_SERVICE } from 'src/domain/service/ioc';

@Controller('/feed')
export class FeedController {
  constructor(
    @Inject(FEED_SERVICE) private readonly feedService: IFeedService,
  ) {}

  @Get()
  async getAll(): Promise<any> {
    return await this.feedService.getAll();
  }
}
