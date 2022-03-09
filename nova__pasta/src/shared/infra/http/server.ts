import 'reflect-metadata'
import express, {Request,Response, NextFunction } from 'express'
import 'express-async-errors'
import routes from './routes';
import '@shared/infra/typeorm'
import AppError from '@shared/errors/AppError';
import cors from 'cors';
import uploadConfig from "@config/upload"
import "@shared/container"

const app = express();
app.use(cors())
app.use(express.json());
app.use('/files',express.static(uploadConfig.directory))
app.use(routes)

app.use((err:Error,request:Request,response:Response,next:NextFunction)=>{
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            status:'error',
            message: err.message
        })
          
    }

    console.log(err)
   
    return response.status(500).json({
        status:'error',
        message:'Internal server error'
    })
 
})
var Host = process.env.Host || '127.0.0.1';

app.listen(process.env.PORT ||3000,()=>{
    console.log('Server start sucess on port 3000')
})