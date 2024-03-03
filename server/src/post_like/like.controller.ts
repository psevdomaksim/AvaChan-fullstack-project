import { Controller, Get } from "@nestjs/common";



@Controller("/likes")

export class LikeController{

     create(){

    }

    @Get()
     getAll(){
    return "likes"
    }

     getOne(){

    }

     update(){

    }

     delete(){

    }

}