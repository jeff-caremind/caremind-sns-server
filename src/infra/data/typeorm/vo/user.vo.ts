import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @Column({
    type: 'varchar',
    length: 200,
    default: '',
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 1000,
    default: '',
  })
  about: string;

  @Column({
    type: 'varchar',
    length: 200,
    default: '',
  })
  location: string;

  @Column({
    type: 'varchar',
    length: 200,
    default: '',
  })
  address: string;

  @Column({
    type: 'varchar',
    length: 2000,
    default: '',
  })
  profileImageUrl: string;

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
