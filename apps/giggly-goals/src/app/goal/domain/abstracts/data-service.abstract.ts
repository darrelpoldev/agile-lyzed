import { Goal } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract goals: IGenericRepository<Goal>;
}
