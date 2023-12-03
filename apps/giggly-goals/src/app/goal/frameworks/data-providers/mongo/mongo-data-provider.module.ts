import { Module } from '@nestjs/common';
import { MongoDataProviderService } from './mongo-data-provider.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { Configs } from '../../../../config';
import { Goal, GoalSchema } from './models/goal.model';
import { IDataProvider } from '../../../domain/abstracts/data-provider.abstract';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Goal.name, schema: GoalSchema }]),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService<Configs>) => ({
        uri: `mongodb+srv://${configService.get(
          'MONGO_USERNAME'
        )}:${configService.get(
          'MONGO_PASSWORD'
        )}@cluster0.st6il.mongodb.net/giggly-goals-api`,
      }),
    }),
  ],
  providers: [
    {
      provide: IDataProvider,
      useClass: MongoDataProviderService,
    },
  ],
  exports: [IDataProvider],
})
export class MongoDataProviderModule {}
