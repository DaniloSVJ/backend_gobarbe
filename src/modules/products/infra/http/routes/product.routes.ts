import  {  Router } from "express";
import MethodsProduct from '@modules/products/services/MethodsProduct'

import ensureAuthenticated from '@shared/infra/http/middleware/ensureAuthenticated'

const ProductRouter = Router();


ProductRouter.use(ensureAuthenticated)

ProductRouter.post('/',async(request,response)=>{
   

          const {name,status} = request.body
          const createProduct = new MethodsProduct()
          const products = await createProduct.execute({
            name,
            status,
          })
         
          const product = {
              id: products.id,
              order: products.order,
              name: products.name,
              status: products.status,
              created_at: products.created_at,
              updated_at: products.updated_at,
          };

          return response.json(product)
});

ProductRouter.patch('/:id',async(request,response)=>{
  
        const {id} = request.params
        const {name,status} = request.body
        const updateProducts = new MethodsProduct()
        const products = await updateProducts.update(         
          id,
          name,
          status
        
        )
        
        return response.json(products)

     
});
ProductRouter.get('/',async(request,response)=>{
  
        const viewProducts= new MethodsProduct()
        const products = await viewProducts.getall()

        const productsAll= products.map(products=>({
          id: products.id,
          order: products.order,
          name: products.name,
          status: products.status,
          created_at: products.created_at,
          updated_at: products.updated_at,
         
         
      }))

      return response.json(productsAll)

});
ProductRouter.get('/:id',async(request,response)=>{
 
    const {id} = request.params
    const viewProducts = new MethodsProduct()
    const products = await viewProducts.viewProduct(id)      
    const product = {
      id: products.id,
      order: products.order,
      name: products.name,
      status: products.status,
      created_at: products.created_at,
      updated_at: products.updated_at,
  };

    return response.json(products)
    
  
});
ProductRouter.delete('/:id',async(request,response)=>{
 
    const {id} = request.params
    const deleteProducts = new MethodsProduct()
    await deleteProducts.delete(id)      

    return response.json({message:"Deleted Products"})
    
  
});
export default ProductRouter