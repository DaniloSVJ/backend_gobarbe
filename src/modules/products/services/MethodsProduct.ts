import {getRepository} from 'typeorm'
import Product from '../infra/typeorm/entities/product'
interface Request {
   
    name:string;
    status:boolean;

}
import AppError from '../../../shared/errors/AppError'

class CreateProductService{
    public async execute({
        name,
        status
        }:Request)
        :Promise<Product>{
        const productRepsitory = getRepository(Product)

        const checkProductExist  = await productRepsitory.findOne({
            where:{name}
        })
        if (checkProductExist){
            throw new AppError('Product not found.')
        }
       
        const product = productRepsitory.create({
            name,
            status
        })
        await productRepsitory.save(product)

        return product
    }

    public async viewProduct(id:string):Promise<Product>{
        const productRepsitory = getRepository(Product)

        const product  = await productRepsitory.findOne({
            where: {id}
        })
        
        if (!product){
            throw new AppError('Product not found.')
        }
        return product

    }

    public async getall(){
        const productAll = await getRepository(Product)
        const product = await productAll.find()

        return (product)

    }

    public async delete(id: string) {
        const productDelete = getRepository(Product)
        const product = await productDelete.findOne({where:{id:String(id)}})   

        if(!product){
            
            throw new AppError('Product not found.',404)
        }         
        
        await productDelete.remove(product)


    }

    public async update(
        id:string,
        name:string,
        status:boolean):Promise<Product> {
        const repositoryProduct = getRepository(Product)
        const product = await repositoryProduct.findOne({ where: { id:String(id) } })
        
        if(!product){
            throw new AppError('Product not found.',404)
        }  
        product.name= name,
        product.status=status,
        await repositoryProduct.save(product)
          
        return product
    }    
    
    
}

export default CreateProductService