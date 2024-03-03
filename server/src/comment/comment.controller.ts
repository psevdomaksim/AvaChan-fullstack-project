import { Controller, Get } from "@nestjs/common";


@Controller("/comments")

export class CommentController{
    create(){

    }

    @Get()
    getAll(){
        return "comments"
    }

    getOne(){

    }

    update(){
        
    }
     delete(){

    }
}

