import Users from '@modules/users/infra/typeorm/entities/users'
import ICreateUserDTO from "../dtos/iCreateUserDTO";
export default interface IUserRepository{
    findById(id:string): Promise<Users | undefined>;
    findByEmail(email:string): Promise<Users | undefined>;
    create(date:ICreateUserDTO):Promise<Users>
    save(user:Users):Promise<Users>
}