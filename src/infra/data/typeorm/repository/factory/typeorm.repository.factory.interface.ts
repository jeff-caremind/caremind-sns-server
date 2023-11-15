import { BaseEntity, DataSource, Repository } from 'typeorm';

export interface ITypeormRepositoryFactory<T extends BaseEntity> {
  getRepository: (dataSource: DataSource) => Repository<T>;
}
