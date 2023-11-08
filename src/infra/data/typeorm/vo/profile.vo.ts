import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';

import { UserVo } from './user.vo';
import { ProfileProjectVo } from './profile_project.vo';
import { ProfileExperienceVo } from './profile_experience.vo';
import { ProfileEducationVo } from './profile_education.vo';
import { ProfileWebsiteVo } from './profile_website.vo';

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

  @OneToMany(() => ProfileProjectVo, (project) => project.profile)
  profileProject: ProfileProjectVo[];

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

  @OneToMany(() => ProfileWebsiteVo, (profileWebsite) => profileWebsite.profile)
  profileWebsite: ProfileWebsiteVo[];
}
