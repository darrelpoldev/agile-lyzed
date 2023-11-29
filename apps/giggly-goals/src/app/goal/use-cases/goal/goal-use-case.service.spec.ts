import { Test, TestingModule } from '@nestjs/testing';
import { GoalUseCaseService } from './goal-use-case.service';

describe('GoalUseCaseService', () => {
  let service: GoalUseCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoalUseCaseService],
    }).compile();

    service = module.get<GoalUseCaseService>(GoalUseCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
