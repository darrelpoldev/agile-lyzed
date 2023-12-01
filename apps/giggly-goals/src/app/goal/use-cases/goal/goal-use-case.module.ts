import { Module } from '@nestjs/common';
import { GoalUseCaseService } from './goal-use-case.service';
import { DataProviderModule } from '../../providers';

@Module({
  imports: [DataProviderModule],
  providers: [GoalUseCaseService],
  exports: [GoalUseCaseService],
})
export class GoalUseCaseModule {}
