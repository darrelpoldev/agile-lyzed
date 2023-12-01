import { Controller, Get } from '@nestjs/common';
import { GoalUseCaseService } from '../../use-cases';
import { Goal } from '../../domain';

@Controller('goals')
export class GoalsController {
  constructor(private goalUsecase: GoalUseCaseService) {}

  @Get()
  async findAll(): Promise<Goal[]> {
    return this.goalUsecase.getAllGoals();
  }
}
