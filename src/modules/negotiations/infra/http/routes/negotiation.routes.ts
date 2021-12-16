import  {  Router } from "express";
import MethodsNegotiation from '@modules/negotiations/services/MethodsNegotiation'

import ensureAuthenticated from '@shared/infra/http/middleware/ensureAuthenticated'

const negotiationRouter = Router();


negotiationRouter.use(ensureAuthenticated)

negotiationRouter.post('/',async(request,response)=>{
   

          const {buyer_id,vendor_id,offer_id,status,contract} = request.body
          const createNegotiation = new MethodsNegotiation()
          const negotiation = await createNegotiation.execute({
            buyer_id,
            vendor_id,
        
            offer_id,
            status,
            contract  
              
          })

         
          const negotiationPost = {
              id: negotiation.id,
              order: negotiation.order,
              buyer_id: negotiation.buyer_id,
              vendor_id: negotiation.vendor_id,
              offer_id: negotiation.offer_id,
              status: negotiation.status,
              contract: negotiation.contract,
                           
              created_at: negotiation.created_at,
              updated_at: negotiation.updated_at,
          };

          return response.json(negotiationPost)

        
});

negotiationRouter.patch('/:id',async(request,response)=>{
  
        const {id} = request.params
        const {buyer_id,vendor_id,offer_id,status,contract} = request.body
        const updateNegotiation = new MethodsNegotiation()
        const negotiation = await updateNegotiation.update(         
          id,  
          buyer_id,
          vendor_id,
          offer_id,
          status,
          contract 
        
        )
        
        return response.json(negotiation)

     
});
negotiationRouter.get('/',async(request,response)=>{
  
        const viewNegotiation= new MethodsNegotiation()
        const negotiation = await viewNegotiation.getall()

        const negotiationAll = negotiation.map(negotiation=>({
          id: negotiation.id,
          order: negotiation.order,
          buyer_id: negotiation.buyer_id,
          vendor_id: negotiation.vendor_id,
          offer_id: negotiation.offer_id,
          status: negotiation.status,
          
          created_at: negotiation.created_at,
          updated_at: negotiation.updated_at,
         
         
      }))

      return response.json(negotiationAll)

});
negotiationRouter.get('/:id',async(request,response)=>{
 
    const {id} = request.params
    const viewNegotiation = new MethodsNegotiation()
    const negotiation = await viewNegotiation.viewNegotiation(id)      
    const negotiationGET = {
          id: negotiation.id,
          order: negotiation.order,
          buyer_id: negotiation.buyer_id,
          vendor_id: negotiation.vendor_id,
          offer_id: negotiation.offer_id,
          status: negotiation.status,
          
          created_at: negotiation.created_at,
          updated_at: negotiation.updated_at,
  };

    return response.json(negotiationGET)
    
  
});
negotiationRouter.delete('/:id',async(request,response)=>{
 
    const {id} = request.params
    const negotiation = new MethodsNegotiation()
    await negotiation.delete(id)      

    return response.json({message:"Disabled offers"})
    
  
});
export default negotiationRouter