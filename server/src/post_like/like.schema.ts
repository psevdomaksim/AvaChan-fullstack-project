import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LikeDocument = HydratedDocument<Like>;

@Schema()
export class Like {
  @Prop()
  username: string;

  @Prop()
  email: string;

}

export const LikeSchema = SchemaFactory.createForClass(Like);