import { Module } from '@nestjs/common';
import { GoalUseCaseModule } from './use-cases/goal/goal-use-case.module';

@Module({
  imports: [GoalUseCaseModule],
})
export class GoalModule {}
