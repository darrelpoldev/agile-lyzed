import { Model } from 'mongoose';
import { IGenericRepository } from '../../../domain/abstracts/generic-repository.abstract';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  getAll(): Promise<T[]> {
    return this._repository
      .find({ deletedAt: null })
      .populate(this._populateOnFind)
      .exec();
  }

  getById(id: string): Promise<T> {
    const result = this._repository
      .findById(id)
      .where({ deletedAt: null })
      .populate(this._populateOnFind)
      .exec();
    return result as Promise<T>;
  }

  create(item: T): Promise<T> {
    return this._repository.create(item);
  }

  update(id: string, item: T) {
    return this._repository.findByIdAndUpdate(id, item, { new: true });
  }

  softDelete(id: string) {
    try {
      return this._repository.findByIdAndUpdate(
        id,
        { deletedAt: new Date() },
        { new: true }
      );
    } catch (error) {
      console.error(error);
    }
  }
}
