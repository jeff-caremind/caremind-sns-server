import { FindManyOptions, Repository } from 'typeorm';
import { FeedVo } from '../../../../typeorm/vo/feed.vo';
import { FeedQueryDto } from 'src/domain/service/dto/feed.dto';

export interface IFeedTypeormRepository extends Repository<FeedVo> {
  queryOptionBuilder(queryDto: FeedQueryDto): FindManyOptions<FeedVo>;
  findWithFeedQuery(queryDto: FeedQueryDto): Promise<FeedVo[]>;
  findOneWithRelationsById(feedId: number): Promise<FeedVo | null>;
}
