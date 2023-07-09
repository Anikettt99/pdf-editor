import { RepositoryContract } from './db';

export function InjectModel(model: any) {
  return function (target: RepositoryContract, key: string | symbol) {
    Object.assign(target, {
      [key]: model,
    });
  };
}
