import {Request,Response} from 'express'
import {container} from 'tsyringe'
import UpdateUserAvatarService from '@modules/users/services/UpdateAvatarUserService';

export default class UserAvatarController{
    public async update(request:Request,response:Response):Promise<Response>{
        try {
    
            const updateAvatarService = container.resolve( UpdateUserAvatarService); 
            let filename = ""
        
            if(request.file?.filename){
              filename= request.file?.filename;
            }
        
            const user = await updateAvatarService.execute({
              user_id:request.user.id,
              avatarFilename: filename
            });
            
            return response.json({ok:true});

        }catch(error){
            return response.status(400).json(error);

        }  
    }
}