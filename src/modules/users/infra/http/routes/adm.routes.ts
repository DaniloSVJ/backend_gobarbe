import {  Router } from "express";
import UsersRepository from "../../typeorm/repositories/UsersRepository";
import CreateUserService from '@modules/users/services/CreateUserService'
import ensureAuthenticated from '@shared/infra/http/middleware/ensureAuthenticated'
import {container} from 'tsyringe'

const userRouter = Router();
interface UserFormat {
  id: string;
  order: string;
  name: string;
  email: string;
  user_type: string;
  status: boolean;
  birthday: string;
  cpf_cnpj: string;
  phone: string;
  whatsapp: string;
  zipcode: string;
  state:string;
  city: string;
  district: string;
  region: string;
  address: string;
  ad_number: string;
  
  created_at: string;
  updated_at: string;
}
userRouter.use(ensureAuthenticated)

userRouter.post('/',async(request,response)=>{
      const {name,email,password,birthday,cpf_cnpj,phone,whatsapp,zipcode,state,city,district,region,address,ad_number,status} = request.body
      const createUser = container.resolve( CreateUserService)
      const user = await createUser.execute({
        name,
        email,
        password,
        user_type:'admin',
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
          
      })

      const userWithoutPassword = {
          id: user.id,
          order: user.status,
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

  
});
userRouter.patch('/:id',async(request,response)=>{
        const {id} = request.params
        const {name,email,birthday,cpf_cnpj,phone,whatsapp,zipcode,state,city,district,region,address,ad_number,status} = request.body
        const updateUser = container.resolve( CreateUserService)
        const user = await updateUser.update(         
          id,
          name,
          email,
          "admin",
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
          id: user?.id,
          order: user?.order,
          name: user?.name,
          email: user?.email,
          user_type: user?.user_type.split(','),
          status: user?.status,
          birthday: user?.birthday,
          cpf_cnpj: user?.cpf_cnpj,
          phone: user?.phone,
          whatsapp: user?.whatsapp,
          zipcode: user?.zipcode,
          state: user?.state,
          city: user?.city,
          district: user?.district,
          region: user?.region,
          address: user?.address,
          ad_number: user?.ad_number,
          
          created_at: user?.created_at,
          updated_at: user?.updated_at,
         
         
        }

        return response.json(userWithoutPassword)

     

});
userRouter.get('/',async(request,response)=>{
  
        const viewUsers = container.resolve( CreateUserService)
        const user = await viewUsers.getAllAdm()
   
        const userWithoutPassword = user.map(user=>({
          id: user?.id,
          order: user?.order,
          name: user?.name,
          email: user?.email,
          user_type: user?.user_type.split(','),
          status: user?.status,
          birthday: user?.birthday,
          cpf_cnpj: user?.cpf_cnpj,
          phone: user?.phone,
          whatsapp: user?.whatsapp,
          zipcode: user?.zipcode,
          state: user?.state,
          city: user?.city,
          district: user?.district,
          region: user?.region,
          address: user?.address,
          ad_number: user?.ad_number,
          
          created_at: user.created_at,
          updated_at: user.updated_at,
         
         
      }))
  
        return response.json(userWithoutPassword)

});
  
userRouter.get('/:id',async(request,response)=>{
  
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
    
  
});

userRouter.delete('/:id',async(request,response)=>{
   
    const {id} = request.params
    const deleteUser = container.resolve( CreateUserService)
    const user = await deleteUser.delete(id)      

    return response.json({message:"Disabled user"})
    
  
});

export default userRouter