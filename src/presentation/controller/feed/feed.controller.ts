import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Headers,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JwtService } from '@nestjs/jwt';

import { IFeedService } from 'src/domain/service/feed/feed.service.interface';
import { FEED_SERVICE } from 'src/domain/service/ioc';
import { FeedLikeDto, FeedsListDto, FeedCreateDto } from 'src/domain/service/dto/feed.dto';

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
  
  @Post()
  async createPost(
    @Body() body: Partial<FeedCreateDto>,
    @Headers('authorization') token: string,
  ): Promise<void> {
    if (!body.content && !body.images && !body.video)
      throw new HttpException('KEY_ERROR', HttpStatus.BAD_REQUEST);
    const decodedToken = this.verifyToken(token);
    const feedCreateDto = {
      userId: decodedToken.aud,
      content: body.content,
      images: body.images,
      video: body.video,
    };
    return await this.feedService.createFeed(feedCreateDto);
  }

  verifyToken(token: string): { aud: number } {
    const decoded = this.JwtService.verify(token);
    return decoded;
  }
}
