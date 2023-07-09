import { RepositoryContract } from './Contract';

export class DatabaseRepository implements RepositoryContract {
  model: any;

  async all(): Promise<Record<string, any>[] | []> {
    return await this.query();
  }

  async getWhere(
    inputs: Record<string, any>,
  ): Promise<Array<Record<string, any>> | []> {
    const query = this.query();

    for (const key in inputs) {
      Array.isArray(inputs[key])
        ? query.whereIn(key, inputs[key])
        : query.where(key, inputs[key]);
    }
    const models = await query;
    return models;
  }

  async create(inputs: Record<string, any>): Promise<Record<string, any>> {
    if (inputs.length > 1) {
      return await this.query().insertGraph(inputs);
    }
    return await this.query().insertAndFetch(inputs);
  }

  query(arg?: any) {
    return this.model.query(arg);
  }
}
