import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IFeedService } from '../feed.service.interface';
import {
  FEED_COMMENT_REPOSITORY,
  FEED_REPOSITORY,
  USER_REPOSITORY,
} from 'src/infra/data/interactor/repository/ioc';
import { IFeedRepository } from 'src/domain/interactor/data/repository/feed.repository.interface';
import { FeedCommentDto } from '../../dto/feed.dto';
import { FeedCommentVo } from 'src/infra/data/typeorm/vo/feed_comment.vo';
import { IUserRepository } from 'src/domain/interactor/data/repository/user.repository.interface';
import { IFeedCommentRepository } from 'src/domain/interactor/data/repository/feed_comment.repository.interface';

@Injectable()
export class FeedServiceImpl implements IFeedService {
  constructor(
    @Inject(FEED_REPOSITORY) private readonly feedRepository: IFeedRepository,
    @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
    @Inject(FEED_COMMENT_REPOSITORY)
    private readonly feedCommentRepository: IFeedCommentRepository,
  ) {}

  async getAll() {
    return await this.feedRepository.findAll();
  }

  async createComment(feedCommentDto: FeedCommentDto): Promise<void> {
    const feed = await this.feedRepository.findOneById(feedCommentDto.feedId);
    if (!feed)
      throw new HttpException('CONTENT_NOT_FOUND', HttpStatus.NOT_FOUND);
    const commenter = await this.userRepository.findOneById(
      feedCommentDto.userId,
    );
    if (!commenter)
      throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    const comment = new FeedCommentVo();
    comment.content = feedCommentDto.content;
    comment.commenter = commenter;
    comment.commentedFeed = feed;
    await this.feedCommentRepository.createComment(comment);
  }
}
