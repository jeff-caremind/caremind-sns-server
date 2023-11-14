import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Headers,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {
  ProfileDto,
  ProfileProjectDto,
} from 'src/domain/service/dto/profile.dto';

import { PROFILE_SERVICE } from 'src/domain/service/ioc';
import { IProfileService } from 'src/domain/service/profile/profile.service.interface';
import { ProfileVo } from 'src/infra/data/typeorm/vo/profile.vo';
import { ProfileEducationVo } from 'src/infra/data/typeorm/vo/profile_education.vo';
import { ProfileExperienceVo } from 'src/infra/data/typeorm/vo/profile_experience.vo';
import { ProfileProjectVo } from 'src/infra/data/typeorm/vo/profile_project.vo';
import { ProfileWebsiteVo } from 'src/infra/data/typeorm/vo/profile_website.vo';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JwtService } from '@nestjs/jwt';

@Controller('/profile')
export class ProfileController {
  constructor(
    @Inject(PROFILE_SERVICE) private readonly profileService: IProfileService,
    private readonly JwtService: JwtService,
  ) {}

  @Get('/:profileId')
  async getUserProfile(
    @Param('profileId') profileId: number,
  ): Promise<ProfileVo | null> {
    return await this.profileService.getUserProfile(profileId);
  }

  @Get('/:profileId/project')
  async getProfileProject(
    @Param('profileId') profileId: number,
  ): Promise<ProfileProjectVo[] | null> {
    return await this.profileService.getProfileProject(profileId);
  }

  @Get('/:profileId/experience')
  async getProfileExperience(
    @Param('profileId') profileId: number,
  ): Promise<ProfileExperienceVo[] | null> {
    return await this.profileService.getProfileExperience(profileId);
  }

  @Get('/:profileId/education')
  async getProfileEducation(
    @Param('profileId') profileId: number,
  ): Promise<ProfileEducationVo[] | null> {
    return await this.profileService.getProfileEducation(profileId);
  }

  @Get('/:profileId/website')
  async getProfileWebsite(
    @Param('profileId') profileId: number,
  ): Promise<ProfileWebsiteVo[] | null> {
    return await this.profileService.getProfileWebsite(profileId);
  }

  @Post()
  async createProfile(
    @Body() body: Partial<ProfileDto>,
    @Headers('authorization') token: string,
  ): Promise<void> {
    const decodedToken = this.verifyToken(token);
    const profileDto: ProfileDto = {
      userId: decodedToken.aud,
      jobDescription: body.jobDescription,
      about: body.about,
      location: body.location,
      address: body.address,
    };
    return await this.profileService.createProfile(profileDto);
  }

  @Post('/:profileId/project')
  async createProfileProject(
    @Param('profileId') profileId: number,
    @Body() body: Partial<ProfileProjectDto>,
    @Headers('authorization') token: string,
  ): Promise<void> {
    if (!body.title && !body.startDate)
      throw new HttpException('KEY_ERROR', HttpStatus.BAD_REQUEST);
    const decodedToken = this.verifyToken(token);
    const profileProjectDto: ProfileProjectDto = {
      userId: decodedToken.aud,
      title: body.title!,
      description: body.description,
      startDate: body.startDate!,
      endDate: body.endDate,
      projectImage: body.projectImage,
      // projectCategory: body.projectCategory,
    };

    return await this.profileService.createProfileProject(
      profileProjectDto,
      profileId,
    );
  }

  verifyToken(token: string): { aud: number } {
    const decoded = this.JwtService.verify(token);
    return decoded;
  }
}
