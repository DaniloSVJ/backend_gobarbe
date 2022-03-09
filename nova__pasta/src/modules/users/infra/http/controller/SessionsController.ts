import {Request,Response} from 'express'
import  {  Router } from "express";
import {container} from 'tsyringe'

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService'


export default class SessionsController{
    public async create(request:Request,response:Response):Promise<Response>{
        const {email,password} = request.body
        const authenticateUser = container.resolve( AuthenticateUserService)
        const {user,token} = await authenticateUser.execute({
          email,
          password
        })
        const user_type = user.user_type.split(",")

        const userWithoutPassword = {            
          id: user.id,
          user_type: user_type,
   
      };

        return response.json({user:userWithoutPassword,token})
    }

}