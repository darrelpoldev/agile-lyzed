import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GoalUseCaseService } from '../../use-cases';
import { Goal } from '../../domain';
import {
  CreateGoalDTO,
  UpdateGoalDTO,
} from '../../use-cases/goal/dtos/goal.dtos';
import { ApiTags, ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('goals')
@ApiTags('Goals')
export class GoalsController {
  constructor(private goalUsecase: GoalUseCaseService) {}

  @ApiOperation({
    description: 'Get all goals.',
  })
  @Get()
  async findAll(): Promise<Goal[]> {
    return this.goalUsecase.getAllGoals();
  }

  @ApiOperation({
    description: 'Get goals by Id.',
  })
  @Get(':id')
  async findById(@Param('id') goalId: string): Promise<Goal> {
    return this.goalUsecase.getGoalById(goalId);
  }

  @ApiOperation({
    description: 'Create goal by providing the details',
  })
  @ApiBody({
    type: CreateGoalDTO,
    description: 'Payload to create goal',
  })
  @Post()
  @HttpCode(201)
  async create(@Body() createGoalDTO: CreateGoalDTO): Promise<Goal> {
    return this.goalUsecase.createGoal(createGoalDTO);
  }

  @ApiOperation({
    description: 'Update goal details.',
  })
  @ApiBody({
    type: UpdateGoalDTO,
    description: 'Payload to update goal.',
  })
  @Put(':id')
  async update(
    @Param('id') goalId: string,
    @Body() updateGoalDTO: UpdateGoalDTO
  ): Promise<Goal> {
    return this.goalUsecase.updateGoal(goalId, updateGoalDTO);
  }

  @ApiOperation({
    description: 'Delete goal by Id.',
  })
  @Delete(':id')
  async delete(@Param('id') goalId: string) {
    return this.goalUsecase.deleteGoal(goalId);
  }
}
