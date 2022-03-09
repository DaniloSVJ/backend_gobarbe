import  {  Router } from "express";
import MethodsProductAtributes from '@modules/productAtributes/services/MethodsProductAtributes'

import ensureAuthenticated from '@shared/infra/http/middleware/ensureAuthenticated'

const ProductAtributeRouter = Router();


ProductAtributeRouter.use(ensureAuthenticated)

ProductAtributeRouter.post('/',async(request,response)=>{
   

          const {name,product_id} = request.body
          const createAtributes = new MethodsProductAtributes()
          const atributes = await createAtributes.execute({
            name,
            product_id,
          })
         
          const atributesJson = {
              id: atributes.id,
              order: atributes.order, 
              name: atributes.name, 
              product_id: atributes.product_id,
              created_at: atributes.created_at,
              updated_at: atributes.updated_at,
          };

          return response.json(atributesJson)
});

ProductAtributeRouter.patch('/:id',async(request,response)=>{
  
        const {id} = request.params
        const {name,product_id} = request.body
        const updateAtributes = new MethodsProductAtributes()
        const atributes = await updateAtributes.update(         
          id,
          name,
          product_id
         )
        
        return response.json(atributes)

     
});

ProductAtributeRouter.get('/',async(request,response)=>{
  
        const viewAtributes= new MethodsProductAtributes()
        const atributes = await viewAtributes.getall()

        const atributesAll= atributes.map(atribute=>({
          id: atribute.id,
          order: atribute.order,
          name: atribute.name,
          product_id: atribute.product_id,
          created_at: atribute.created_at,
          updated_at: atribute.updated_at,
         
         
      }))

      return response.json(atributesAll)

});

ProductAtributeRouter.get('/:id',async(request,response)=>{
 
    const {id} = request.params
    const viewAtributes = new MethodsProductAtributes()
    const atributes = await viewAtributes.viewProductAtribute(id)      
    const atributesJson = {
      id: atributes.id,
      order: atributes.order,
      name: atributes.name,
      product_id: atributes.product_id,
      created_at: atributes.created_at,
      updated_at: atributes.updated_at,
  };

    return response.json(atributesJson)
    
  
});

ProductAtributeRouter.delete('/:id',async(request,response)=>{
 
    const {id} = request.params
    const deleteProductAtributes = new MethodsProductAtributes()
    await deleteProductAtributes.delete(id)      

    return response.json({message:"Deleted product attribute"})
    
  
});
export default ProductAtributeRouter