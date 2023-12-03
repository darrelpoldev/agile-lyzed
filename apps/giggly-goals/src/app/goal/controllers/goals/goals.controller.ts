import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { GoalUseCaseService } from '../../use-cases';
import { Goal } from '../../domain';
import { CreateGoalDTO } from '../../use-cases/goal/dtos/goal.dtos';

@Controller('goals')
export class GoalsController {
  constructor(private goalUsecase: GoalUseCaseService) {}

  @Get()
  async findAll(): Promise<Goal[]> {
    return this.goalUsecase.getAllGoals();
  }

  @Post()
  @HttpCode(201)
  async create(@Body() createGoalDTO: CreateGoalDTO): Promise<Goal> {
    return this.goalUsecase.createGoal(createGoalDTO);
  }
}
