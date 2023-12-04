import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
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

  @Get(':id')
  async findById(@Param('id') goalId: string): Promise<Goal> {
    return this.goalUsecase.getGoalById(goalId);
  }

  @Post()
  @HttpCode(201)
  async create(@Body() createGoalDTO: CreateGoalDTO): Promise<Goal> {
    return this.goalUsecase.createGoal(createGoalDTO);
  }

  @Delete(':id')
  async delete(@Param('id') goalId: string) {
    return this.goalUsecase.deleteGoal(goalId);
  }
}
