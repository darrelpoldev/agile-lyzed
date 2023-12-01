import { Injectable } from '@nestjs/common';
import { Goal } from '../../domain/entities';
import { IDataProvider } from '../../domain/abstracts/data-provider.abstract';

@Injectable()
export class GoalUseCaseService {
  constructor(private dataProvider: IDataProvider) {}
  async getAllGoals(): Promise<Goal[]> {
    return this.dataProvider.goals.getAll();
  }

  getGoalById(): Promise<Goal> {
    throw new Error('Method not implemented');
  }

  createGoal(): Promise<Goal> {
    throw new Error('Method not implemented');
  }

  updateGoal(): Promise<Goal> {
    throw new Error('Method not implemented');
  }

  deleteGoalById(): Promise<Goal> {
    throw new Error('Method not implemented');
  }
}
