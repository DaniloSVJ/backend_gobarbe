import  {  Router } from "express";
import MethodsOffers from '@modules/offers/services/MethodsOffers'

import ensureAuthenticated from '@shared/infra/http/middleware/ensureAuthenticated'

const offerRouter = Router();


offerRouter.use(ensureAuthenticated)

offerRouter.post('/',async(request,response)=>{
   

          const {type_offer,user_id,product_id,attr_id,price,amount,form_of_stock,comments,zipcode,state,city,district,region,address,ad_number,status} = request.body
          const createOffer = new MethodsOffers()
          const offers = await createOffer.execute({
            type_offer,
            user_id,
            product_id,
            attr_id,
            price,
            amount,
            form_of_stock,
            comments,
            zipcode,
            state,
            city,
            district,
            region,
            address,
            ad_number,  
            status
              
          })

         
          const Offers = {
              id: offers.id,
              order: offers.order,
              type_offer: offers.type_offer,
              user_id: offers.user_id,
              product_id: offers.product_id,
              attr_id: offers.attr_id,
              price: offers.price,
              amount: offers.amount,
              form_of_stock: offers.form_of_stock,
              comments: offers.comments,
              zipcode: offers.zipcode,
              state: offers.state,
              city: offers.city,
              district: offers.district,
              region: offers.region,
              address: offers.address,
              ad_number: offers.ad_number,  
              status: offers.status,
              
              created_at: offers.created_at,
              updated_at: offers.updated_at,
          };

          return response.json(Offers)

        
});

offerRouter.patch('/:id',async(request,response)=>{
  
        const {id} = request.params
        const {type_offer,user_id,product_id,attr_id,price,amount,form_of_stock,comments,zipcode,state,city,district,region,address,ad_number,status} = request.body
        const updateOffers = new MethodsOffers()
        const offers = await updateOffers.update(         
          id,
          type_offer,
          user_id,
          product_id,
          attr_id,
          price,
          amount,
          form_of_stock,
          comments,
          zipcode,
          state,
          city,
          district,
          region,
          address,
          ad_number,  
          status
        
        )
        
        return response.json(offers)

     
});
offerRouter.get('/',async(request,response)=>{
  
        const viewOffers= new MethodsOffers()
        const offers = await viewOffers.getall()

        const Offers = offers.map(offers=>({
          id: offers.id,
          order: offers.order,
          name: offers.type_offer,
          email: offers.user_id,
          offers_type: offers.product_id,
          status: offers.attr_id,
          birthday: offers.price,
          cpf_cnpj: offers.amount,
          phone: offers.form_of_stock,
          whatsapp: offers.comments,
          zipcode: offers.zipcode,
          state: offers.state,
          city: offers.city,
          district: offers.district,
          region: offers.region,
          address: offers.address,
          ad_number: offers.ad_number,
          
          created_at: offers.created_at,
          updated_at: offers.updated_at,
         
         
      }))

      return response.json(Offers)

});
offerRouter.get('/:id',async(request,response)=>{
 
    const {id} = request.params
    const viewOffers = new MethodsOffers()
    const offers = await viewOffers.viewOffers(id)      
    const Offers = {
      id: offers.id,
      order: offers.order,
      name: offers.type_offer,
      email: offers.user_id,
      offers_type: offers.product_id,
      status: offers.attr_id,
      birthday: offers.price,
      cpf_cnpj: offers.amount,
      phone: offers.form_of_stock,
      whatsapp: offers.comments,
      zipcode: offers.zipcode,
      state: offers.state,
      city: offers.city,
      district: offers.district,
      region: offers.region,
      address: offers.address,
      ad_number: offers.ad_number,
      
      created_at: offers.created_at,
      updated_at: offers.updated_at,
  };

    return response.json(Offers)
    
  
});
offerRouter.delete('/:id',async(request,response)=>{
 
    const {id} = request.params
    const deleteOffers = new MethodsOffers()
    await deleteOffers.delete(id)      

    return response.json({message:"Disabled offers"})
    
  
});
export default offerRouter