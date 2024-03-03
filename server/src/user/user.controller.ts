import { Controller, Get } from "@nestjs/common";



@Controller("/users")

export class UserController{

    registration(){

    }

    login(){

    }

    @Get()
    getAll(){
        return "GET ALL USERS"
    }

    getOne(){

    }

    update(){

    }

    delete(){

    }

}