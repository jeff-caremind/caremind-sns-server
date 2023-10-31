import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user',
})
export class UserVo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;
}
