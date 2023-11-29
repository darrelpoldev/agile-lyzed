import { Injectable } from '@nestjs/common';
import { Goal } from '../../domain/entities';

@Injectable()
export class GoalUseCaseService {
  getAllGoals(): Promise<Goal> {
    throw new Error('Method not implemented');
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
