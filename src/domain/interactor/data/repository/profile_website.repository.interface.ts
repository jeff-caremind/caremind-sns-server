import { ProfileWebsiteVo } from 'src/infra/data/typeorm/vo/profile_website.vo';

export interface IProfileWebsiteRepository {
  findWebsiteByProfileId(profileId: number): Promise<ProfileWebsiteVo[] | null>;
  create(profileWebsite: ProfileWebsiteVo): Promise<void>;
  findWebsiteByWebsiteId(websiteId: number): Promise<ProfileWebsiteVo | null>;
  update(website: ProfileWebsiteVo): Promise<void>;
  remove(website: ProfileWebsiteVo): Promise<void>;
}
