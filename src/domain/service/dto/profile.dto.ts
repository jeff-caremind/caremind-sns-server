import { ExperienceCompanyVo } from 'src/infra/data/typeorm/vo/experience_company.vo';

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
  projectImages?: string[];
  projectCategory?: string;
};

export type ProfileExperienceDto = {
  userId: number;
  position: string;
  description?: string;
  startDate: Date;
  endDate?: Date | null;
  experienceCompany?: ExperienceCompanyVo;
  // experienceCompany?: {
  //   name: string;
  //   logo: string;
  //   location: string;
  // };
};
