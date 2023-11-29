import { Module } from '@nestjs/common';
import { GoalUseCaseService } from './goal-use-case.service';

@Module({
  providers: [GoalUseCaseService],
  exports: [GoalUseCaseService],
})
export class GoalUseCaseModule {}
