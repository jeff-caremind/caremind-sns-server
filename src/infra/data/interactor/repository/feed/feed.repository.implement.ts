import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IFeedRepository } from 'src/domain/interactor/data/repository/feed.repository.interface';
import {
  FEED_TYPEORM_REPOSITORY,
  USER_TYPEORM_REPOSITORY,
} from 'src/infra/data/typeorm/repository/ioc';
import { Repository } from 'typeorm';
import { FeedVo } from '../../../typeorm/vo/feed.vo';
import { FeedLikeDto } from 'src/domain/service/dto/feed.dto';
import { UserVo } from 'src/infra/data/typeorm/vo/user.vo';

@Injectable()
export class FeedRepositoryImpl implements IFeedRepository {
  constructor(
    @Inject(FEED_TYPEORM_REPOSITORY)
    private readonly feedTypeormRepository: Repository<FeedVo>,
    @Inject(USER_TYPEORM_REPOSITORY)
    private readonly userTypeormRepository: Repository<UserVo>,
  ) {}

  async findAll(): Promise<any> {
    return await this.feedTypeormRepository.find();
  }

  async createLike(feedLikeDto: FeedLikeDto): Promise<void> {
    const feed = await this.feedTypeormRepository.findOne({
      relations: {
        likes: true,
      },
      where: {
        id: feedLikeDto.likedFeedId,
      },
    });

    const user = await this.userTypeormRepository.findOneBy({
      id: feedLikeDto.likerId,
    });

    if (!user || !feed) {
      throw new HttpException('CONTENT_NOT_FOUND', HttpStatus.NOT_FOUND);
    }

    feed.likes.push(user);
    await this.feedTypeormRepository.save(feed);
  }
}
