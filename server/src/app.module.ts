import { LikeModule } from './post_like/like.module';
import { CommentModule } from './comment/comment.module';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { Module } from "@nestjs/common";

@Module({
    imports: [
        UserModule,
        PostModule,
        CommentModule,
        LikeModule
       // MongooseModule.forRoot('mongodb+srv://varvashevichmaks:<password>@cluster0.t2vuk7o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    ]
})

export class AppModule{

}