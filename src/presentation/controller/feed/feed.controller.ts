import {
  Controller,
  Get,
  Inject,
  Post,
  Body,
  Param,
  Headers,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JwtService } from '@nestjs/jwt';
import { FeedCommentDto } from 'src/domain/service/dto/feed.dto';

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

  @Post('/:feedId/comment')
  async createComment(
    @Body() body: any,
    @Param('feedId') feedId: number,
    @Headers('authorization') token: string,
  ): Promise<void> {
    const decoded = this.verifyToken(token);
    const feedCommentDto: FeedCommentDto = {
      userId: decoded.aud,
      feedId: Number(feedId),
      content: body.content,
    };
    return await this.feedService.createComment(feedCommentDto);
  }

  verifyToken(token: string): { aud: number } {
    const decoded = this.JwtService.verify(token);
    return decoded;
  }
}
