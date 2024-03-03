import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop()
  text: string;

  @Prop()
  user_id: string;

  @Prop()
  post_id: string;

}

export const CommentSchema = SchemaFactory.createForClass(Comment);