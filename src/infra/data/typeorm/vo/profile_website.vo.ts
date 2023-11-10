import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ProfileVo } from './profile.vo';

@Entity({
  name: 'profile_website',
})
export class ProfileWebsiteVo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 100,
    default: '',
  })
  type: string;

  @Column({
    type: 'varchar',
    length: 1000,
    default: '',
  })
  url: string;

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

  @ManyToOne(() => ProfileVo)
  @JoinColumn({
    name: 'profileId', // foreign key 이름
    referencedColumnName: 'id', // 외래 키가 참조할 column
  })
  profile: ProfileVo;
}
