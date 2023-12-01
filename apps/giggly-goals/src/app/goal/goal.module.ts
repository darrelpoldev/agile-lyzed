import { Module } from '@nestjs/common';
import { GoalUseCaseModule } from './use-cases/goal/goal-use-case.module';
import { GoalsController } from './controllers/goals/goals.controller';

@Module({
  imports: [GoalUseCaseModule],
  controllers: [GoalsController],
})
export class GoalModule {}
