import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GoalDocument = HydratedDocument<Goal>;

@Schema()
export class Goal {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const GoalSchema = SchemaFactory.createForClass(Goal);
