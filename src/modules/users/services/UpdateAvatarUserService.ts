import {getRepository} from 'typeorm'
import Users from '../infra/typeorm/entities/users'
import path from 'path'
import uploadConfig from '@config/upload' 
import {inject,injectable} from 'tsyringe'

import fs from 'fs'
import IUserRepository from '../repositories/IUsersRepository'

interface Request{
    user_id:string;
    avatarFilename:string;
}
@injectable()
class UpdateUserAvatarService {
    constructor(
        @inject("UsersRepository")
        private userRepository:IUserRepository
     ){
        
     }
    public async execute({user_id,avatarFilename}:Request):Promise<Users>{
      

        const user = await this.userRepository.findById(user_id)

        if(!user)
        {
            throw new Error("Only authenticated users can change avatar")
        }
        if(user.avatar){
            const userAvatarFilePath = path.join(uploadConfig.directory,user.avatar)
            const userAvatarFileExist = await fs.promises.stat(userAvatarFilePath)

            if (userAvatarFileExist){
                await fs.promises.unlink(userAvatarFilePath)
            }
        }
        user.avatar =avatarFilename;
        await this.userRepository.save(user)
        return  user;
    }
}

export default UpdateUserAvatarService