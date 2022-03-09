import {getRepository} from 'typeorm'
import Negotiation from '../infra/typeorm/entities/negotiation'

interface Request {
    buyer_id:string;
    vendor_id:string;

    offer_id:string;
    status:string;
    contract:string;  
}   
import AppError from '../../../shared/errors/AppError'

class CreateNegotiationService{
    public async execute({
        buyer_id,
        vendor_id,
        offer_id,
        status,
        contract  }:Request)
        :Promise<Negotiation>{
        const negotiationRepsitory = getRepository(Negotiation)

        const checkNegotiationExist  = await negotiationRepsitory.find()
      
       
        const offer = negotiationRepsitory.create({
            buyer_id,
            vendor_id,
            offer_id,
            status,
            contract 
        })
        await negotiationRepsitory.save(offer)

        return offer
    }

    public async viewNegotiation(id:string):Promise<Negotiation>{
        const negotiationRepsitory = getRepository(Negotiation)

        const negotiation  = await negotiationRepsitory.findOne({
            where: {id}
        })
        
        if (!negotiation){
            throw new AppError('Negotiation not found.')
        }
        return negotiation

    }

    public async getall(){
        const negotiationAll = await getRepository(Negotiation)
            
        const negotiation = await negotiationAll.find()


        
        return (negotiation)

    }

    public async delete(id: string) {
        const negotiationDelete = getRepository(Negotiation)
        const negotiation = await negotiationDelete.findOne({where:{id:String(id)}})   
        if(!negotiation){
            throw new AppError('Negotiation not found.',404)
        } 
        
        await negotiationDelete.save(negotiation)

    }

    public async update(
        id:string,
        buyer_id:string,
        vendor_id:string,
        offer_id:string,
        status:string,
        contract:string ):Promise<Negotiation> {
        const repositoryNegotiation = getRepository(Negotiation)
        const negotiation = await repositoryNegotiation.findOne({ where: { id:String(id) } })
        
        if(!negotiation){
            throw new AppError('Negotiation not found.',404)
        }  
       
        negotiation.buyer_id=buyer_id,
        negotiation.vendor_id=vendor_id,
        negotiation.offer_id=offer_id,
        negotiation.status=status,
        negotiation.contract=contract,
            
        await repositoryNegotiation.save(negotiation)
          
        return negotiation
    }    
    
    
}

export default CreateNegotiationService