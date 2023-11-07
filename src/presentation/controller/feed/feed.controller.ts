import { Controller, Get, Inject, Param, Post, Headers } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JwtService } from '@nestjs/jwt';

import { FeedLikeDto, FeedsListDto } from 'src/domain/service/dto/feed.dto';
import { IFeedService } from 'src/domain/service/feed/feed.service.interface';
import { FEED_SERVICE } from 'src/domain/service/ioc';

@Controller('/feed')
export class FeedController {
  constructor(
    @Inject(FEED_SERVICE) private readonly feedService: IFeedService,
    private readonly JwtService: JwtService,
  ) {}

  @Get()
  async getAll(): Promise<FeedsListDto> {
    return await this.feedService.getAll();
  }

  @Post('/:feedId/like')
  async likeFeed(
    @Param('feedId') feedId: string,
    @Headers('authorization') token: string,
  ): Promise<void> {
    const decodedToken = this.verifyToken(token);
    const feedLikeDto: FeedLikeDto = {
      likerId: decodedToken.aud,
      likedFeedId: parseInt(feedId),
    };
    return await this.feedService.likeFeed(feedLikeDto);
  }

  verifyToken(token: string): { aud: number } {
    const decoded = this.JwtService.verify(token);
    return decoded;
  }
}
