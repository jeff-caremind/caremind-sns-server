import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { UserVo } from './user.vo';

@Entity({
  name: 'user_connection',
})
@Unique(['follower', 'followee'])
export class UserConnectionVo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserVo)
  follower: UserVo;

  @ManyToOne(() => UserVo)
  followee: UserVo;

  @Column({
    default: 0,
  })
  accepted: boolean;

  @Column({
    type: 'varchar',
    length: 200,
    nullable: true,
  })
  message: string;

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
