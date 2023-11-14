import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ProfileVo } from './profile.vo';
import { ProjectImageVo } from './project_image.vo';
import { ProjectCategoryVo } from './project_category.vo';

@Entity({
  name: 'profile_project',
})
export class ProfileProjectVo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 100,
  })
  title: string;

  @Column({
    type: 'json',
    nullable: true,
  })
  coverImage: {
    id: number;
    image: string;
    createdAt: Date;
    updatedAt: Date;
  };

  @Column({
    type: 'varchar',
    length: 1000,
    default: '',
    nullable: true,
  })
  description: string;

  @Column({
    type: 'date',
  })
  startDate: Date;

  @Column({
    type: 'date',
    nullable: true,
  })
  endDate: Date | null;

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

  @OneToMany(() => ProjectImageVo, (projectImage) => projectImage.project, {
    cascade: true,
  })
  projectImage: ProjectImageVo[];

  @ManyToOne(() => ProjectCategoryVo, {
    cascade: true,
  })
  @JoinColumn({
    name: 'projectCategoryId', // foreign key 이름
    referencedColumnName: 'id', // 외래 키가 참조할 column
  })
  projectCategory: ProjectCategoryVo;
}
