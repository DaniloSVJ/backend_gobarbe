import {getRepository} from 'typeorm'
import {compare} from 'bcryptjs'
import {sign} from 'jsonwebtoken'
import authConfig from '@config/auth'
import {inject,injectable} from 'tsyringe'

import User from '../infra/typeorm/entities/users'

import AppError from '@shared/errors/AppError'
import IUserRepository from '../repositories/IUsersRepository'

interface Request {
    email:string;
    password:string;
}
interface Response {
    user:User;
    token:string;
    
}
@injectable()
class AuthenticateUserService{
    constructor(
        @inject("UsersRepository")
        private usersRepsitory:IUserRepository
     ){
        
     }
    public async execute({email,password}:Request):Promise<Response>{
       

        const user  = await this.usersRepsitory.findById(email)
        
        if (!user){
            throw new AppError('Incorrect email/password combination',401)
        }

        const passwordMatched = await compare(password,user.password) 
        if (!passwordMatched){
            throw new AppError('Incorrect email/password combination',401)
        }
        const {secret,expiresIn} = authConfig.jwt
        const token = sign({},secret,{
            subject:user.id,
            expiresIn: expiresIn
        })


        return {
            user,
            token,
        }

    }

}

export default AuthenticateUserService