import { Module } from '@nestjs/common';
import { MongoDataProviderModule } from '../../frameworks/data-providers/mongo/mongo-data-provider.module';

@Module({
  imports: [MongoDataProviderModule],
  exports: [MongoDataProviderModule],
})
export class DataProviderModule {}
