import { CommentController } from './comment.controller';
import { Module } from "@nestjs/common";
import { CommentService } from './comment.service';


@Module({
    controllers:[CommentController],
    providers:[CommentService]
})

export class CommentModule{

}