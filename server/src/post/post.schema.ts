import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop()
  text: string;

  @Prop()
  image: string;

  @Prop()
  user_id: string;

  //@Prop({type:[{type:ObjectId, ref:"Comment"}]})
 // comments: Comment[]

}

export const PostSchema = SchemaFactory.createForClass(Post);