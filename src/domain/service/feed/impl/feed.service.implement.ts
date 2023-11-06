import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IFeedService } from '../feed.service.interface';
import {
  FEED_REPOSITORY,
  USER_REPOSITORY,
} from 'src/infra/data/interactor/repository/ioc';
import { IFeedRepository } from 'src/domain/interactor/data/repository/feed.repository.interface';
import { FeedCreateDto } from '../../dto/feed.dto';
import { IUserRepository } from 'src/domain/interactor/data/repository/user.repository.interface';
import { FeedVo } from 'src/infra/data/typeorm/vo/feed.vo';
import { FeedVideoVo } from 'src/infra/data/typeorm/vo/feed_video.vo';
import { FeedImageVo } from 'src/infra/data/typeorm/vo/feed_image.vo';

@Injectable()
export class FeedServiceImpl implements IFeedService {
  constructor(
    @Inject(FEED_REPOSITORY) private readonly feedRepository: IFeedRepository,
    @Inject(USER_REPOSITORY) private readonly userRepository: IUserRepository,
  ) {}

  async getAll() {
    return await this.feedRepository.findAll();
  }

  async createFeed(feedCreateDto: FeedCreateDto) {
    const feed = new FeedVo();
    if (feedCreateDto.content) feed.content = feedCreateDto.content;
    const user = await this.userRepository.findOneById(feedCreateDto.userId);
    if (!user) throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    feed.author = user;
    if (feedCreateDto.images) {
      const images = feedCreateDto.images.map((item) => {
        const imageVo = new FeedImageVo();
        imageVo.imageUrl = item;
        return imageVo;
      });
      feed.images = images;
    }
    if (feedCreateDto.video) {
      const video = new FeedVideoVo();
      video.videoUrl = feedCreateDto.video;
      feed.video = video;
    }
    return await this.feedRepository.create(feed);
  }
}
