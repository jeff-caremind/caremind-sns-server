import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ProfileProjectVo } from './profile_project.vo';
import { ProfileExperienceVo } from './profile_experience.vo';
import { ProfileEducationVo } from './profile_education.vo';

@Entity({
  name: 'profile',
})
export class ProfileVo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'integer',
    unique: true,
  })
  userId: number;

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

  @OneToMany(() => ProfileProjectVo, (project) => project.profile)
  project: ProfileProjectVo[];

  @OneToMany(
    () => ProfileExperienceVo,
    (profileExperience) => profileExperience.profile,
  )
  profileExperience: ProfileExperienceVo[];

  @OneToMany(
    () => ProfileEducationVo,
    (profileEducation) => profileEducation.profile,
  )
  profileEducation: ProfileEducationVo[];
}
