import { Controller, Get } from "@nestjs/common";


@Controller("/posts")

export class PostController{
     create(){

    }

    @Get()
     getAll(){
        return "get posts"
    }

     getOne(){

    }

     delete(){

    }
}