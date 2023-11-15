import { Inject, Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';

import { IFeedTagRepository } from 'src/domain/interactor/data/repository/feed_tag.repository.interface';
import { FEED_TAG_TYPEORM_REPOSITORY } from 'src/infra/data/typeorm/repository/ioc';
import { FeedTagVo } from 'src/infra/data/typeorm/vo/feed_tag.vo';

@Injectable()
export class FeedTagRepositoryImpl implements IFeedTagRepository {
  constructor(
    @Inject(FEED_TAG_TYPEORM_REPOSITORY)
    private readonly feedTagTypeormRepository: Repository<FeedTagVo>,
  ) {}

  async findAll(tags: string[]): Promise<FeedTagVo[]> {
    return await this.feedTagTypeormRepository.find({
      relations: {
        tag: true,
      },
      where: {
        tag: {
          tag: In(tags),
        },
      },
    });
  }
}
