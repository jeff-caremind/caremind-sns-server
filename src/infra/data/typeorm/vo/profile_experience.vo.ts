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
import { ExperienceCompanyVo } from './experience_company.vo';

@Entity({
  name: 'profile_experience',
})
export class ProfileExperienceVo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'integer',
  })
  profileId: number;

  @Column({
    type: 'varchar',
    length: 100,
    default: '',
  })
  position: string;

  @Column({
    type: 'integer',
  })
  companyId: number;

  @Column({
    type: 'varchar',
    length: 1000,
    default: '',
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

  get inProgress(): boolean {
    // experience 진행중 여부 : 진행중이면 endDate에 null
    return this.endDate === null;
  }

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

  @ManyToOne(() => ProfileVo, (profile) => profile.profileExperience)
  profile: ProfileVo;

  @ManyToOne(() => ExperienceCompanyVo)
  @JoinColumn({
    name: 'experienceCompany', // foreign key 이름
    referencedColumnName: 'id', // 외래 키가 참조할 column
  })
  exerienceCompany: ExperienceCompanyVo;
}
