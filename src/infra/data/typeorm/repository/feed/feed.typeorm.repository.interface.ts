import { FindManyOptions, Repository } from 'typeorm';
import { FeedVo } from '../../vo/feed.vo';
import { FeedQueryDto } from 'src/domain/service/dto/feed.dto';

export interface IFeedTypeormRepository extends Repository<FeedVo> {
  queryOptionsBuilder(queryDto: FeedQueryDto): FindManyOptions<FeedVo>;
}
