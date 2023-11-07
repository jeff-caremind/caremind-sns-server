import { Inject, Injectable } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JwtService } from '@nestjs/jwt';

import { IProfileService } from '../profile.service.interface';
import { PROFILE_REPOSITORY } from 'src/infra/data/interactor/repository/ioc';
import { IProfileRepository } from 'src/domain/interactor/data/repository/profile.repository.interface';
import { ProfileVo } from 'src/infra/data/typeorm/vo/profile.vo';

@Injectable()
export class ProfileServiceImpl implements IProfileService {
  constructor(
    @Inject(PROFILE_REPOSITORY)
    private readonly profileRepository: IProfileRepository,
    private readonly JwtService: JwtService,
  ) {}

  async getUserProfile(profileId: number): Promise<ProfileVo[]> {
    const profile = await this.profileRepository.findAllByProfileId(profileId);

    if (!profile) {
      return [];
    }

    return profile;
  }
}
