import { Test, TestingModule } from '@nestjs/testing';
import { MongoDataProviderService } from './mongo-data-provider.service';

describe('MongoDataProviderService', () => {
  let service: MongoDataProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongoDataProviderService],
    }).compile();

    service = module.get<MongoDataProviderService>(MongoDataProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
