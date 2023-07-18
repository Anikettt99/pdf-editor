import { Model } from 'objection';
import { RepositoryContract } from './db';

export function InjectModel(model: any) {
  if (!(model.prototype instanceof Model)) {
    throw new Error(
      `Instance of ${model.name} expected, ${typeof model} passed!`,
    );
  }

  return function (target: RepositoryContract, key: string | symbol) {
    Object.assign(target, {
      [key]: model,
    });
  };
}
