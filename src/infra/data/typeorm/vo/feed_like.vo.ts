import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'feed_like',
})
export class FeedLikeVo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  likedFeedId: number;

  @Column()
  likerId: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;
}
