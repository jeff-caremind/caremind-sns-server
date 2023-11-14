import { DataSource, ObjectLiteral, EntityTarget, EntitySchema } from 'typeorm';

export abstract class TypeormRepositoryFactory<T extends ObjectLiteral> {
  entity: EntityTarget<T>;
  constructor() {
    this.entity = EntitySchema<T>;
  }

  getRepository(dataSource: DataSource) {
    return dataSource.getRepository(this.entity);
  }
}
