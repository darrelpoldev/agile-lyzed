import { Goal } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataProvider {
  abstract goals: IGenericRepository<Goal>;
}
