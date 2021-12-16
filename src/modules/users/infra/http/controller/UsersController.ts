import {Request,Response} from 'express'
import  {  Router } from "express";
import {container} from 'tsyringe'
import CreateUserService from '@modules/users/services/CreateUserService'

import UpdateUserAvatarService from '@modules/users/services/UpdateAvatarUserService';

export default class UserController{
    public async create(request:Request,response:Response):Promise<Response>{
        const {name,email,password,user_type,birthday,cpf_cnpj,phone,whatsapp,zipcode,state,city,district,region,address,ad_number} = request.body
         
        const createUser = container.resolve( CreateUserService)
        const user = await createUser.execute({
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
          status:false
            
        })

       
         
        const userWithoutPassword = {
            id: user.id,
            order: user.order,
            name: user.name,
            email: user.email,
            user_type: user.user_type.split(','),
            status: user.status,
            birthday: user.birthday,
            cpf_cnpj: user.cpf_cnpj,
            phone: user.phone,
            whatsapp: user.whatsapp,
            zipcode: user.zipcode,
            state: user.state,
            city: user.city,
            district: user.district,
            region: user.region,
            address: user.address,
            ad_number: user.ad_number,
            
            created_at: user.created_at,
            updated_at: user.updated_at,
        };

        return response.json(userWithoutPassword)

    }
    public async update(request:Request,response:Response):Promise<Response>{
        
        const {id} = request.params
        const {name,email,user_type,birthday,cpf_cnpj,phone,whatsapp,zipcode,state,city,district,region,address,ad_number,status} = request.body
        const updateUser = container.resolve( CreateUserService)
        const user = await updateUser.update(         
          id,
          name,
          email,
          
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
          status
        
        )
        
        
        const userWithoutPassword = {
          id: user.id,
          order: user.order,
          name: user.name,
          email: user.email,
          user_type: user.user_type.split(','),
          status: user.status,
          birthday: user.birthday,
          cpf_cnpj: user.cpf_cnpj,
          phone: user.phone,
          whatsapp: user.whatsapp,
          zipcode: user.zipcode,
          state: user.state,
          city: user.city,
          district: user.district,
          region: user.region,
          address: user.address,
          ad_number: user.ad_number,
          
          created_at: user.created_at,
          updated_at: user.updated_at,
      };

      return response.json(userWithoutPassword)

    }

    public async all(request:Request,response:Response):Promise<Response>{
        const viewUsers = container.resolve( CreateUserService)
        const user = await viewUsers.getall()

        const userWithoutPassword = user.map(user=>({
          id: user.id,
          order: user.order,
          name: user.name,
          email: user.email,
          user_type: user.user_type.split(','),
          status: user.status,
          birthday: user.birthday,
          cpf_cnpj: user.cpf_cnpj,
          phone: user.phone,
          whatsapp: user.whatsapp,
          zipcode: user.zipcode,
          state: user.state,
          city: user.city,
          district: user.district,
          region: user.region,
          address: user.address,
          ad_number: user.ad_number,
          
          created_at: user.created_at,
          updated_at: user.updated_at,
         
         
      }))

      return response.json(userWithoutPassword)
    }

    public async view(request:Request,response:Response):Promise<Response>{
        const {id} = request.params
        const viewUser = container.resolve( CreateUserService)
        const user = await viewUser.viewone(id)      
        const userWithoutPassword = {
          id: user.id,
          order: user.order,
          name: user.name,
          email: user.email,
          user_type: user.user_type.split(','),
          status: user.status,
          birthday: user.birthday,
          cpf_cnpj: user.cpf_cnpj,
          phone: user.phone,
          whatsapp: user.whatsapp,
          zipcode: user.zipcode,
          state: user.state,
          city: user.city,
          district: user.district,
          region: user.region,
          address: user.address,
          ad_number: user.ad_number,
          
          created_at: user.created_at,
          updated_at: user.updated_at,
        };
    
    
        return response.json(userWithoutPassword)
    }

    public async delete(request:Request,response:Response):Promise<Response>{
        const {id} = request.params
        const deleteUser = container.resolve( CreateUserService)
        const user = await deleteUser.delete(id)      
    
        return response.json({message:"Disabled user"})
    }
   
}