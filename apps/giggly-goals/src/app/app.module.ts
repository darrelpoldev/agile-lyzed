import { Module } from '@nestjs/common';
import { GoalModule } from './goal/goal.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GoalModule,
  ],
})
export class AppModule {}
