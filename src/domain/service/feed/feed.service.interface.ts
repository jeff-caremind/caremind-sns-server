import { FeedsListDto } from '../dto/feed.dto';

export interface IFeedService {
  getAll(): Promise<FeedsListDto>;
}
