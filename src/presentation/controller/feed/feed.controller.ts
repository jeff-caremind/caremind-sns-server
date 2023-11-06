import { Body, Controller, Get, Inject, Post, Headers } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JwtService } from '@nestjs/jwt';
import { FeedCreateDto } from 'src/domain/service/dto/feed.dto';

import { IFeedService } from 'src/domain/service/feed/feed.service.interface';
import { FEED_SERVICE } from 'src/domain/service/ioc';

@Controller('/feed')
export class FeedController {
  constructor(
    @Inject(FEED_SERVICE) private readonly feedService: IFeedService,
    private readonly JwtService: JwtService,
  ) {}

  @Get()
  async getAll(): Promise<any> {
    return await this.feedService.getAll();
  }

  @Post()
  async createPost(
    @Body() body: Partial<FeedCreateDto>,
    @Headers('authorization') token: string,
  ): Promise<void> {
    const decodedToken = this.varifyToken(token);
    const feedCreateDto = {
      ...body,
      userId: decodedToken.aud,
    };
    return await this.feedService.createFeed(feedCreateDto);
  }

  varifyToken(token: string): { aud: number } {
    const decoded = this.JwtService.verify(token);
    return decoded;
  }
}
