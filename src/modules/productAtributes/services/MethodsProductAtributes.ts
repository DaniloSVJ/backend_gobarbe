import {getRepository} from 'typeorm'
import ProductAtributes from '../infra/typeorm/entities/product_atributes'
interface Request {
   
    name:string;
    product_id:string;
}
import AppError from '../../../shared/errors/AppError'

class CreateOffersService{
    public async execute({
        name,
        product_id
        }:Request)
        :Promise<ProductAtributes>{
        const productRepsitory = getRepository(ProductAtributes)

        const checkProductExist  = await productRepsitory.findOne({
            where:{name}
        })
        if (checkProductExist){
            throw new AppError('Atributes not found')
        }
       
        const product = productRepsitory.create({
            name,
            product_id
        })
        await productRepsitory.save(product)

        return product
    }

    public async viewProductAtribute(id:string):Promise<ProductAtributes>{
        const productRepsitory = getRepository(ProductAtributes)

        const atributes  = await productRepsitory.findOne({
            where: {id}
        })
        
        if (!atributes){
            throw new AppError('Atributes not found')
        }
        return atributes

    }

    public async getall(){
        const atributeAll = await getRepository(ProductAtributes)
        const  atribute = await atributeAll.find()

        return (atribute)

    }

    public async delete(id: string) {
        const atributeDelete = getRepository(ProductAtributes)
        const atribute = await atributeDelete.findOne({where:{id:String(id)}})   

        if(!atribute){
            
            throw new AppError('Atributes not found',404)
        }         
        
        await atributeDelete.remove(atribute)


    }

    public async update(
        id:string,
        name:string,
        product_id:string):Promise<ProductAtributes> {
        const repositoryProductAtributes = getRepository(ProductAtributes)
        const atribute = await repositoryProductAtributes.findOne({ where: { id:String(id) } })
        
        if(!atribute){
            throw new AppError('Atributes not found',404)
        }  
        atribute.name= name,
        atribute.product_id=product_id,
        await repositoryProductAtributes.save(atribute)
          
        return atribute
    }    
    
    
}

export default CreateOffersService