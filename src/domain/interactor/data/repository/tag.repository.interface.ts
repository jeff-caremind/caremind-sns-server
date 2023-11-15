import { TagVo } from 'src/infra/data/typeorm/vo/tag.vo';

export interface ITagRepository {
  findAll(tags: string[]): Promise<TagVo[]>;
}
