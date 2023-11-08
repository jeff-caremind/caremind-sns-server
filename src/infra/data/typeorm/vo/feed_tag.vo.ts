import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FeedVo } from './feed.vo';
import { TagVo } from './tag.vo';

@Entity({
  name: 'feed_tag',
})
export class FeedTagVo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => FeedVo)
  feed: FeedVo;

  @ManyToOne(() => TagVo, {
    cascade: true,
  })
  tag: TagVo;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;
}
