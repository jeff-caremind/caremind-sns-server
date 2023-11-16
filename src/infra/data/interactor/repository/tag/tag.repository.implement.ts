import { Inject, Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';

import { ITagRepository } from 'src/domain/interactor/data/repository/tag.repository.interface';
import { TAG_TYPEORM_REPOSITORY } from 'src/infra/data/typeorm/repository/ioc';
import { TagVo } from 'src/infra/data/typeorm/vo/tag.vo';

@Injectable()
export class TagRepositoryImpl implements ITagRepository {
  constructor(
    @Inject(TAG_TYPEORM_REPOSITORY)
    private readonly tagTypeormRepository: Repository<TagVo>,
  ) {}

  async findAll(tags: string[]): Promise<TagVo[]> {
    return await this.tagTypeormRepository.find({
      where: {
        tag: In(tags),
      },
    });
  }
}
