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
    nullable: true,
  })
  jobDescription: string;

  @Column({
    type: 'varchar',
    length: 500,
    default: '',
    nullable: true,
  })
  about: string;

  @Column({
    type: 'varchar',
    length: 100,
    default: '',
    nullable: true,
  })
  location: string;

  @Column({
    type: 'varchar',
    length: 200,
    default: '',
    nullable: true,
  })
  address: string;

  @Column({
    type: 'varchar',
    length: 2000,
    default: '',
    nullable: true,
  })
  profileBackImage: string;

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
