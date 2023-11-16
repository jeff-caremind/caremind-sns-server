import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  HttpException,
  HttpStatus,
  Put,
  Delete,
  UseInterceptors,
  Req,
} from '@nestjs/common';

import { IFeedService } from 'src/domain/service/feed/feed.service.interface';
import { FEED_SERVICE } from 'src/domain/service/ioc';
import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';
import {
  FeedLikeDto,
  FeedsDto,
  FeedCreateDto,
  FeedCommentDto,
  FeedDeleteDto,
} from 'src/domain/service/dto/feed.dto';
import { AuthInterceptor } from 'src/domain/interactor/interceptor/auth.interceptor';
import { AppRequest } from 'src/type/app_request';
import { SecurityServiceImpl } from 'src/domain/service/security/impl/security.service.implement';

@Controller('/feed')
@UseInterceptors(AuthInterceptor)
export class FeedController {
  constructor(
    @Inject(FEED_SERVICE) private readonly feedService: IFeedService,
    private readonly securityService: SecurityServiceImpl,
  ) {}

  @Get('/:feedId')
  async getOne(@Param('feedId') feedId: number): Promise<FeedVo> {
    return await this.feedService.getOne(feedId);
  }

  @Get()
  async getAll(): Promise<FeedsDto> {
    return await this.feedService.getAll();
  }

  @Post('/:feedId/comment')
  async createComment(
    @Body() body: any,
    @Param('feedId') feedId: number,
  ): Promise<void> {
    const feedCommentDto: FeedCommentDto = {
      userId: this.securityService.getUserId(),
      feedId: Number(feedId),
      content: body.content,
    };
    return await this.feedService.createComment(feedCommentDto);
  }

  @Post('/:feedId/like')
  async createLike(@Param('feedId') feedId: string): Promise<void> {
    const feedLikeDto: FeedLikeDto = {
      likerId: this.securityService.getUserId(),
      likedFeedId: parseInt(feedId),
    };
    return await this.feedService.createLike(feedLikeDto);
  }

  @Post()
  async createFeed(@Body() body: Partial<FeedCreateDto>): Promise<void> {
    if (!body.content && !body.images && !body.video)
      throw new HttpException('KEY_ERROR', HttpStatus.BAD_REQUEST);
    const feedCreateDto: FeedCreateDto = {
      userId: this.securityService.getUserId(),
      content: body.content,
      images: body.images,
      video: body.video,
    };
    return await this.feedService.createFeed(feedCreateDto);
  }

  @Put('/:feedId')
  async updateFeed(
    @Param('feedId') feedId: number,
    @Body() body: FeedCreateDto,
  ) {
    const feedUpdateDto: FeedCreateDto = {
      ...body,
      userId: this.securityService.getUserId(),
    };
    return await this.feedService.updateFeed(Number(feedId), feedUpdateDto);
  }

  @Delete('/:feedId/comment/:commentId')
  async deleteComment(
    @Req() req: AppRequest,
    @Param('feedId') feedId: number,
    @Param('commentId') commentId: number,
  ): Promise<void> {
    const feedCommentDeleteDto = {
      userId: this.securityService.getUserId(),
      feedId: Number(feedId),
      commentId: Number(commentId),
    };
    return await this.feedService.deleteComment(feedCommentDeleteDto);
  }

  @Put('/:feedId/comment/:commentId')
  async updateComment(
    @Param('feedId') feedId: number,
    @Param('commentId') commentId: number,
    @Body() body: Partial<FeedCommentDto>,
  ): Promise<void> {
    if (!body.content)
      throw new HttpException('KEY_ERROR', HttpStatus.BAD_REQUEST);
    const feedCommentDto: FeedCommentDto = {
      userId: this.securityService.getUserId(),
      feedId: feedId,
      content: body.content,
    };
    return await this.feedService.updateComment(
      Number(commentId),
      feedCommentDto,
    );
  }

  @Delete('/:feedId/like')
  async deleteLike(@Param('feedId') feedId: number) {
    const feedLikeDto: FeedLikeDto = {
      likerId: this.securityService.getUserId(),
      likedFeedId: Number(feedId),
    };
    return await this.feedService.deleteLike(feedLikeDto);
  }

  @Delete('/:feedId')
  async deleteFeed(@Param('feedId') feedId: number) {
    const feedDeleteDto: FeedDeleteDto = {
      userId: Number(this.securityService.getUserId()),
      feedId: feedId,
    };
    return await this.feedService.deleteFeed(feedDeleteDto);
  }
}
