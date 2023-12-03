import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { IDataProvider } from '../../../domain/abstracts/data-provider.abstract';
import { Goal } from '../../../domain';
import { MongoGenericRepository } from './mongo-generic-repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MongoDataProviderService
  implements IDataProvider, OnApplicationBootstrap
{
  public goals: MongoGenericRepository<Goal>;
  constructor(
    @InjectModel(Goal.name)
    private GoalRepository: Model<Goal>
  ) {}

  onApplicationBootstrap() {
    this.goals = new MongoGenericRepository<Goal>(this.GoalRepository);
  }
}
