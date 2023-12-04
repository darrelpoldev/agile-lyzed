import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GoalDocument = HydratedDocument<Goal>;

@Schema({ collection: 'goals', timestamps: true })
export class Goal {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ default: null })
  deletedAt: Date;
}

export const GoalSchema = SchemaFactory.createForClass(Goal);
