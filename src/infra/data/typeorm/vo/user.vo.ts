import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { FeedVo } from './feed.vo';

@Entity({
  name: 'user',
})
export class UserVo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 100,
    default: 'User',
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 200,
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 20,
    default: '',
  })
  phoneNumber: string;

  @OneToMany(() => FeedVo, (feed) => feed.author)
  feeds: FeedVo[];

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
