import { ProjectImageVo } from 'src/infra/data/typeorm/vo/project_image.vo';

export type ProfileDto = {
  userId: number;
  jobDescription?: string;
  about?: string;
  location?: string;
  address?: string;
};

export type ProfileProjectDto = {
  userId: number;
  title: string;
  description?: string;
  startDate: Date;
  endDate?: Date | null;
  projectImage?: string[];
};
