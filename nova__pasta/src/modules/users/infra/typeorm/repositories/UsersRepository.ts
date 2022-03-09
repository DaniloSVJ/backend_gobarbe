import Users from '@modules/users/infra/typeorm/entities/users'
import {getRepository,Repository} from 'typeorm'

import IUserRepository from "@modules/users/repositories/IUsersRepository";
import ICreateUserDTO from "@modules/users/dtos/iCreateUserDTO";



class UsersRepository implements IUserRepository{
    private ormRepository: Repository<Users>;

    constructor(){
        this.ormRepository = getRepository(Users)
    }

    public async findById(id:string):Promise<Users | undefined>{
        const user= await this.ormRepository.findOne(id)
        return user

    }
    public async findByEmail(email:string):Promise<Users | undefined>{
        const user= await this.ormRepository.findOne({
            where:{
                email
            }
        })
        return user
    }


    public async create(UserData:ICreateUserDTO): Promise<Users>{
        const users = this.ormRepository.create(UserData)

        await this.ormRepository.save(users)

        return users;
    }

    public async save(user:Users): Promise<Users>{
        return this.ormRepository.save(user)
    }
    
}

export default UsersRepository