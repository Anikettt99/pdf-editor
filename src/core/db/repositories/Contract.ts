export interface RepositoryContract {
  model: any;

  all(): Promise<Array<Record<string, any>> | []>;

  getWhere(
    inputs: Record<string, any>,
  ): Promise<Array<Record<string, any>> | []>;

  create(inputs: Record<string, any>): Promise<Record<string, any>>;

  query(arg?: any): any;
}
