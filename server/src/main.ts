import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

const start = async ()=>{
    try{
        const PORT = process.env.PORT || 5000;
        const app = await NestFactory.create(AppModule);
        await app.listen(PORT, ()=>console.log("server start listening on port "+ 5000)) //возвращает промис
    }catch(e){

    }

}

start();