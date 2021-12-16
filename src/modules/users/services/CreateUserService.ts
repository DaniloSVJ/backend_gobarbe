
import User from '../infra/typeorm/entities/users'
import {hash} from 'bcryptjs'
import {inject,injectable} from 'tsyringe'

interface Request {
    name:string;
    email:string;
    password:string;
    user_type:string
    zipcode:string;
    state:string;
    city:string;
    district:string
    region:string;
    address:string;
    ad_number:string;
    status:boolean
    birthday:string;
    cpf_cnpj:string;
    phone:string;
    whatsapp:string;

}
import AppError from '@shared/errors/AppError'
import IUserRepository from '../repositories/IUsersRepository'
@injectable()
class CreateUserService{
    constructor(
        @inject('UsersRepository')
        private userRepository:IUserRepository
     ){
        
     }
    public async execute({
        name,
        email,
        password,
        user_type,
        birthday,
        cpf_cnpj,
        phone,
        whatsapp,
        zipcode,
        state,
        city,
        district,
        region,
        address,
        ad_number,
        status}:Request)
        :Promise<User>{
        

        const checkUserExist  = await this.userRepository.findByEmail(email)
        if (checkUserExist){
            throw new AppError('Email address alteready used.')
        }
        const hashedpassword = await hash(password,8)
       
        const user = await this.userRepository.create({
            name,
            email,
            password:hashedpassword,
            // user_type,
            // birthday,
            // cpf_cnpj,
            // phone,
            // whatsapp,
            // zipcode,
            // state,
            // city,
            // district,
            // region,
            // address,
            // ad_number,
            // status
        })
        

        return user
    }

    public async viewoneclient(email:string):Promise<User>{
        

        const user  = await this.userRepository.findByEmail(email)
        
        if (!user){
            throw new AppError('Email address alteready used.')
        }
        return user

    }
    public async viewone(id:string):Promise<User>{
       

        const user  = await this.userRepository.findById(id)
        
        if (!user){
            throw new AppError('Email address alteready used.')
        }
        return user

    }
    public async getAllAdm(){
        const usersall = await getRepository(User)
            
        const users = await usersall
       .createQueryBuilder()
       
       .where({user_type:"admin" })
       .getMany() 
            
       if(!users){
           throw new AppError('Not found.') 
       }

        
        return (users)

    }
    public async getAllOffices(){
        const usersall = await getRepository(User)
       
        const users = await usersall
        .createQueryBuilder()
        
        .where({user_type:"official" })
        .getMany() 
             
        if(!users){
            throw new AppError('Email address alteready used.') 
        }
        
        //userss = users as Request
       
      
        return (users)

    }
    public async getall(){
        const usersall = await getRepository(User)
            
        const users = await usersall
        .createQueryBuilder()
        
        .where([{user_type:"comprador" },{user_type:"vendedor" },{user_type:"comprador,vendedor" },{user_type:"vendedor,comprador" }])
        .getMany() 
             
        if(!users){
            throw new AppError('Not found.') 
        }
        
        return users

    }

    public async delete(id: string) {
        const userDelete = getRepository(User)
        const user = await userDelete.findOne({where:{id:String(id)}})   
        if(!user){
            throw new AppError('User not found.',404)
        } 
        user.status = false
        await userDelete.save(user)

    }

    public async update(
        id:string,
        name:string,
        email:string,
       
        user_type:string,
        birthday:string,
        cpf_cnpj:string,
        phone:string,
        whatsapp:string,
        zipcode:string,
        state:string,
        city:string,
        district:string,
        region:string,
        address:string,
        ad_number:string,
        status:boolean):Promise<User> {
        const repositoryUser = getRepository(User)
        const user = await repositoryUser.findOne({ where: { id:String(id) } })
        
        if(!user){
            throw new AppError('User not found.',404)
        }  
        user.name= name,
        user.email=email,
        
        user.user_type=user_type,
        user.birthday=birthday,
        user.cpf_cnpj=cpf_cnpj,
        user.phone=phone,
        user.whatsapp=whatsapp,
        user.zipcode=zipcode,
        user.state=state,
        user.city=city,
        user.district=district,
        user.region=region,
        user.address=address,
        user.ad_number=ad_number,
        user.status=status        
        await repositoryUser.save(user)
          
        return user
    }    
    
    
}

export default CreateUserService