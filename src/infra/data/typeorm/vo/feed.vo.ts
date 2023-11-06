import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserVo } from './user.vo';
import { FeedImageVo } from './feed_image.vo';
import { FeedVideoVo } from './feed_video.vo';

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

  @ManyToOne(() => UserVo)
  author: UserVo;

  @OneToMany(() => FeedImageVo, (feedImage) => feedImage.feed, {
    cascade: true,
  })
  images: FeedImageVo[];

  @OneToOne(() => FeedVideoVo, {
    cascade: true,
  })
  @JoinColumn()
  video: FeedVideoVo;

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
