import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';

import { UserVo } from './user.vo';

@Entity({
  name: 'profile',
})
export class ProfileVo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 500,
    default: '',
  })
  jobDescription: string;

  @Column({
    type: 'varchar',
    length: 500,
  })
  about: string;

  @Column({
    type: 'varchar',
    length: 100,
    default: '',
  })
  location: string;

  @Column({
    type: 'varchar',
    length: 200,
    default: '',
  })
  address: string;

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

  @OneToOne(() => UserVo)
  @JoinColumn()
  user: UserVo;
}
