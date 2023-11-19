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
  Delete,
} from '@nestjs/common';
import {
  ProfileDeleteDto,
  ProfileDto,
  ProfileEducationDeleteDto,
  ProfileEducationDto,
  ProfileExperienceDeleteDto,
  ProfileExperienceDto,
  ProfileProjectDeleteDto,
  ProfileProjectDto,
  ProfileWebsiteDeleteDto,
  ProfileWebsiteDto,
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

  @Get('/profileId')
  async getProfileId(
    @Headers('authorization') token: string,
  ): Promise<ProfileVo | null> {
    const decodedToken = this.verifyToken(token);
    const userId = decodedToken.aud;
    return await this.profileService.getProfileId(userId);
  }

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
    if (!body.title || !body.startDate)
      throw new HttpException('KEY_ERROR', HttpStatus.BAD_REQUEST);
    const decodedToken = this.verifyToken(token);
    const profileProjectDto: ProfileProjectDto = {
      userId: decodedToken.aud,
      title: body.title!,
      description: body.description,
      startDate: body.startDate!,
      endDate: body.endDate,
      projectImages: body.projectImages,
      projectCategory: body.projectCategory,
    };

    return await this.profileService.createProfileProject(
      profileProjectDto,
      profileId,
    );
  }

  @Post('/:profileId/experience')
  async createProfileExperience(
    @Param('profileId') profileId: number,
    @Body() body: Partial<ProfileExperienceDto>,
    @Headers('authorization') token: string,
  ): Promise<void> {
    if (!body.position || !body.startDate)
      throw new HttpException('KEY_ERROR', HttpStatus.BAD_REQUEST);
    const decodedToken = this.verifyToken(token);
    const profileExperienceDto: ProfileExperienceDto = {
      userId: decodedToken.aud,
      position: body.position!,
      description: body.description,
      startDate: body.startDate!,
      endDate: body.endDate,
      experienceCompany: body.experienceCompany,
    };

    return await this.profileService.createProfileExperience(
      profileExperienceDto,
      profileId,
    );
  }

  @Post('/:profileId/education')
  async createProfileEducation(
    @Param('profileId') profileId: number,
    @Body() body: Partial<ProfileEducationDto>,
    @Headers('authorization') token: string,
  ): Promise<void> {
    if (!body.course || !body.startDate)
      throw new HttpException('KEY_ERROR', HttpStatus.NOT_FOUND);
    const decodedToken = this.verifyToken(token);
    const profileEducationDto: ProfileEducationDto = {
      userId: decodedToken.aud,
      course: body.course!, // 학과, 전공 설명 입력
      description: body.description, // 추가 정보
      startDate: body.startDate!,
      endDate: body.endDate,
      educationInstitute: body.educationInstitute!,
    };
    return await this.profileService.createProfileEducation(
      profileEducationDto,
      profileId,
    );
  }

  @Post('/:profileId/website')
  async createProfileWebsite(
    @Param('profileId') profileId: number,
    @Body() body: Partial<ProfileWebsiteDto>,
    @Headers('authorization') token: string,
  ): Promise<void> {
    if (!body.type || !body.url)
      throw new HttpException('KEY_ERROR', HttpStatus.BAD_REQUEST);
    const decodedToken = this.verifyToken(token);
    const profileWebsiteDto: ProfileWebsiteDto = {
      userId: decodedToken.aud,
      type: body.type!,
      url: body.url!,
    };

    return await this.profileService.createProfileWebsite(
      profileWebsiteDto,
      profileId,
    );
  }

  @Delete('/:profileId')
  async deleteProfile(
    @Headers('authorization') token: string,
    @Param('profileId') profileId: number,
  ): Promise<void> {
    const decodedToken = this.verifyToken(token);

    const profileDeleteDto: ProfileDeleteDto = {
      userId: decodedToken.aud,
      profileId: Number(profileId),
    };

    return await this.profileService.deleteProfile(profileDeleteDto);
  }

  @Delete('/:profileId/project/:projectId')
  async deleteProfileProject(
    @Headers('authorization') token: string,
    @Param('profileId') profileId: number,
    @Param('projectId') projectId: number,
  ): Promise<void> {
    const decodedToken = this.verifyToken(token);

    const profileProjectDeleteDto: ProfileProjectDeleteDto = {
      userId: decodedToken.aud,
      profileId: Number(profileId),
      projectId: Number(projectId),
    };

    return await this.profileService.deleteProfileProject(
      profileProjectDeleteDto,
    );
  }

  @Delete('/:profileId/experience/:experienceId')
  async deleteProfileExperience(
    @Headers('authorization') token: string,
    @Param('profileId') profileId: number,
    @Param('experienceId') experienceId: number,
  ): Promise<void> {
    const decodedToken = this.verifyToken(token);

    const profileExperienceDeleteDto: ProfileExperienceDeleteDto = {
      userId: decodedToken.aud,
      profileId: Number(profileId),
      experienceId: Number(experienceId),
    };

    return await this.profileService.deleteProfileExperience(
      profileExperienceDeleteDto,
    );
  }

  @Delete('/:profileId/education/:educationId')
  async deleteProfileEducation(
    @Headers('authorization') token: string,
    @Param('profileId') profileId: number,
    @Param('educationId') educationId: number,
  ): Promise<void> {
    const decodedToken = this.verifyToken(token);
    const profileEducationDeleteDto: ProfileEducationDeleteDto = {
      userId: decodedToken.aud,
      profileId: Number(profileId),
      educationId: Number(educationId),
    };
    return await this.profileService.deleteProfileEducation(
      profileEducationDeleteDto,
    );
  }

  @Delete('/:profileId/website/:websiteId')
  async deleteProfileWebsite(
    @Headers('authorization') token: string,
    @Param('profileId') profileId: number,
    @Param('websiteId') websiteId: number,
  ): Promise<void> {
    const decodedToken = this.verifyToken(token);
    const profileWebsiteDeleteDto: ProfileWebsiteDeleteDto = {
      userId: decodedToken.aud,
      profileId: Number(profileId),
      websiteId: Number(websiteId),
    };
    return await this.profileService.deleteProfileWebsite(
      profileWebsiteDeleteDto,
    );
  }

  verifyToken(token: string): { aud: number } {
    const decoded = this.JwtService.verify(token);
    return decoded;
  }
}
