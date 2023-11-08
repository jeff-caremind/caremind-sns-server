import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';

import { IFeedService } from '../feed.service.interface';
import {
  FEED_COMMENT_REPOSITORY,
  FEED_LIKE_REPOSITORY,
  FEED_REPOSITORY,
  USER_REPOSITORY,
} from 'src/infra/data/interactor/repository/ioc';
import { IFeedRepository } from 'src/domain/interactor/data/repository/feed.repository.interface';
import { IUserRepository } from 'src/domain/interactor/data/repository/user.repository.interface';
import { IFeedCommentRepository } from 'src/domain/interactor/data/repository/feed_comment.repository.interface';
import { IFeedLikeRepository } from 'src/domain/interactor/data/repository/feed_like.repository.interface';
import { FeedCommentVo } from 'src/infra/data/typeorm/vo/feed_comment.vo';
import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';
import { FeedVideoVo } from 'src/infra/data/typeorm/vo/feed_video.vo';
import { FeedImageVo } from 'src/infra/data/typeorm/vo/feed_image.vo';
import { FeedLikeVo } from 'src/infra/data/typeorm/vo/feed_like.vo';
import {
  FeedLikeDto,
  FeedsListDto,
  FeedCreateDto,
  FeedCommentDto,
} from '../../dto/feed.dto';

@Injectable()
export class FeedServiceImpl implements IFeedService {
  constructor(
    @Inject(FEED_REPOSITORY) private readonly feedRepository: IFeedRepository,
    @Inject(FEED_LIKE_REPOSITORY)
    private readonly feedLikeRepository: IFeedLikeRepository,
    @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
    @Inject(FEED_COMMENT_REPOSITORY)
    private readonly feedCommentRepository: IFeedCommentRepository,
  ) {}

  async getAll() {
    const feeds = await this.feedRepository.findAll();
    const feedsList: FeedsListDto = feeds.map((feed) => {
      return {
        ...feed,
        likesCount: feed.likes.length,
        commentsCount: feed.comments.length,
      };
    });
    return feedsList;
  }

  async likeFeed(feedLikeDto: FeedLikeDto): Promise<void> {
    if (
      typeof feedLikeDto.likedFeedId !== 'number' ||
      typeof feedLikeDto.likerId !== 'number'
    )
      throw new HttpException('KEY_ERROR', HttpStatus.BAD_REQUEST);

    const liker = await this.userRepository.findOneById(feedLikeDto.likerId);
    const likedFeed = await this.feedRepository.findOneById(
      feedLikeDto.likedFeedId,
    );

    if (!liker || !likedFeed)
      throw new HttpException('CONTENT_NOT_FOUND', HttpStatus.NOT_FOUND);

    const newFeedLike = new FeedLikeVo();
    newFeedLike.liker = liker;
    newFeedLike.likedFeed = likedFeed;
    return await this.feedLikeRepository.createLike(newFeedLike);
  }

  async createFeed(feedCreateDto: FeedCreateDto) {
    const { userId, content, images, video } = feedCreateDto;
    const user = await this.userRepository.findOneById(userId);
    if (!user) throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    const feed = new FeedVo();
    feed.author = user;
    if (content) feed.content = content;
    if (images) feed.images = this.createImageVos(images);
    if (video) feed.video = this.createVideoVo(video);
    return await this.feedRepository.create(feed);
  }

  async createComment(feedCommentDto: FeedCommentDto): Promise<void> {
    const { userId, feedId, content } = feedCommentDto;
    const feed = await this.feedRepository.findOneById(feedId);
    if (!feed)
      throw new HttpException('CONTENT_NOT_FOUND', HttpStatus.NOT_FOUND);
    const commenter = await this.userRepository.findOneById(userId);
    if (!commenter)
      throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    const comment = new FeedCommentVo();
    comment.content = content;
    comment.commenter = commenter;
    comment.commentedFeed = feed;
    await this.feedCommentRepository.create(comment);
  }

  async updateFeed(
    feedId: number,
    feedUpdateDto: FeedCreateDto,
  ): Promise<void> {
    const { userId, content, images, video } = feedUpdateDto;
    const feed = await this.feedRepository.findOneWithAuthorById(feedId);
    if (!feed)
      throw new HttpException('CONTENT_NOT_FOUND', HttpStatus.NOT_FOUND);
    if (userId !== feed.author.id)
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
    if (content) feed.content = content;
    if (images) feed.images = this.createImageVos(images);
    if (video) feed.video = this.createVideoVo(video);
    await this.feedRepository.update(feed);
  }

  async getOne(feedId: number): Promise<FeedVo> {
    const feed = await this.feedRepository.findOneWithRelationsById(feedId);
    if (!feed)
      throw new HttpException('CONTENT_NOT_FOUND', HttpStatus.NOT_FOUND);
    return feed;
  }

  async updateComment(
    commentId: number,
    feedCommentDto: FeedCommentDto,
  ): Promise<void> {
    const { userId, feedId, content } = feedCommentDto;
    const user = await this.userRepository.findOneById(userId);
    if (!user) throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    const feed = await this.feedRepository.findOneById(feedId);
    if (!feed)
      throw new HttpException('CONTENT_NOT_FOUND', HttpStatus.NOT_FOUND);
    const comment = await this.feedCommentRepository.findOneById(commentId);
    if (!comment)
      throw new HttpException('CONTENT_NOT_FOUND', HttpStatus.NOT_FOUND);
    comment.content = content;
    return await this.feedCommentRepository.update(comment);
  }

  private createImageVos(images: string[]): FeedImageVo[] {
    return images.map((item) => {
      const imageVo = new FeedImageVo();
      imageVo.imageUrl = item;
      return imageVo;
    });
  }

  private createVideoVo(videoUrl: string): FeedVideoVo {
    const videoVo = new FeedVideoVo();
    videoVo.videoUrl = videoUrl;
    return videoVo;
  }
}
