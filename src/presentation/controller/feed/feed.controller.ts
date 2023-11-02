import { Controller, Get, Inject } from '@nestjs/common';
import { FeedsListDto } from 'src/domain/service/dto/feed.dto';
import { IFeedService } from 'src/domain/service/feed/feed.service.interface';
import { FEED_SERVICE } from 'src/domain/service/ioc';

@Controller('/feed')
export class FeedController {
  constructor(
    @Inject(FEED_SERVICE) private readonly feedService: IFeedService,
  ) {}

  @Get()
  async getAll(): Promise<FeedsListDto> {
    return await this.feedService.getAll();
  }
}
