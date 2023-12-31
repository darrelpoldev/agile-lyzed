import { Injectable } from '@nestjs/common';
import { Goal } from '../../domain/entities';
import { IDataProvider } from '../../domain/abstracts/data-provider.abstract';
import { CreateGoalDTO, UpdateGoalDTO } from './dtos/goal.dtos';

@Injectable()
export class GoalUseCaseService {
  constructor(private dataProvider: IDataProvider) {}

  async getAllGoals(): Promise<Goal[]> {
    return this.dataProvider.goals.getAll();
  }

  async getGoalById(id: string): Promise<Goal> {
    return this.dataProvider.goals.getById(id);
  }

  async createGoal(createGoalDTO: CreateGoalDTO): Promise<Goal> {
    const newGoal = new Goal();
    newGoal.title = createGoalDTO.title;
    newGoal.description = createGoalDTO.description;

    const createdGoal = await this.dataProvider.goals.create(newGoal);
    return createdGoal;
  }

  async updateGoal(goalId: string, goal: UpdateGoalDTO): Promise<Goal> {
    const goalToUpdate: Goal = new Goal();
    goalToUpdate.title = goal.title;
    goalToUpdate.description = goal.description;
    return this.dataProvider.goals.update(goalId, goalToUpdate);
  }

  async deleteGoal(goalId: string): Promise<Goal> {
    return this.dataProvider.goals.softDelete(goalId);
  }
}
