import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserVo } from './user.vo';
import { FeedCommentVo } from './feed_comment.vo';

@Entity({
  name: 'feed',
})
export class FeedVo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 1000,
    default: '',
  })
  content: string;

  @ManyToOne(() => UserVo, (user) => user.feeds)
  author: UserVo;

  @OneToMany(() => FeedCommentVo, (feedComment) => feedComment.commentedFeed, {
    cascade: true,
  })
  comments: FeedCommentVo[];

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
