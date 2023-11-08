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
  Put,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JwtService } from '@nestjs/jwt';

import { IFeedService } from 'src/domain/service/feed/feed.service.interface';
import { FEED_SERVICE } from 'src/domain/service/ioc';
import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';
import {
  FeedLikeDto,
  FeedsListDto,
  FeedCreateDto,
  FeedCommentDto,
} from 'src/domain/service/dto/feed.dto';

@Controller('/feed')
export class FeedController {
  constructor(
    @Inject(FEED_SERVICE) private readonly feedService: IFeedService,
    private readonly JwtService: JwtService,
  ) {}

  @Get('/:feedId')
  async getOne(@Param('feedId') feedId: number): Promise<FeedVo> {
    return await this.feedService.getOne(feedId);
  }

  @Get()
  async getAll(): Promise<FeedsListDto> {
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
  async createFeed(
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

  @Put('/:feedId')
  async updateFeed(
    @Headers('authorization') token: string,
    @Param('feedId') feedId: number,
    @Body() feedUpdateDto: FeedCreateDto,
  ) {
    const decoded = this.verifyToken(token);
    feedUpdateDto.userId = decoded.aud;
    return await this.feedService.updateFeed(Number(feedId), feedUpdateDto);
  }

  @Put('/:feedId/comment/:commentId')
  async updateComment(
    @Headers('authorization') token: string,
    @Param('feedId') feedId: number,
    @Param('commentId') commentId: number,
    @Body() body: Partial<FeedCommentDto>,
  ): Promise<void> {
    const decoded = this.verifyToken(token);
    if (!body.content)
      throw new HttpException('KEY_ERROR', HttpStatus.BAD_REQUEST);
    const feedCommentDto: FeedCommentDto = {
      userId: decoded.aud,
      feedId: feedId,
      content: body.content,
    };
    return await this.feedService.updateComment(
      Number(commentId),
      feedCommentDto,
    );
  }

  verifyToken(token: string): { aud: number } {
    const decoded = this.JwtService.verify(token);
    return decoded;
  }
}
