import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { FeedVo } from './feed.vo';
import { UserVo } from './user.vo';

@Entity({
  name: 'feed_comment',
})
export class FeedCommentVo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => FeedVo, (feed) => feed.id)
  commentedFeed: FeedVo;

  @ManyToOne(() => UserVo)
  commenter: UserVo;

  @Column({
    type: 'varchar',
    length: 200,
  })
  content: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
