import { LikeService } from './like.service';
import { LikeController } from './like.controller';
import { Module } from "@nestjs/common";


@Module({
    controllers: [LikeController],
    providers: [LikeService]
})

export class LikeModule{

}