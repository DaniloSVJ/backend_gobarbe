import {getRepository} from 'typeorm'
import Offers from '../infra/typeorm/entities/offers'

interface Request {
    type_offer:string;
    user_id:string;
    product_id:string;
    attr_id:string;
    price:string;
    amount:string;
    form_of_stock:string;
    comments:string;
    zipcode:string;
    state:string;
    city:string;
    district:string;
    region:string;
    address:string;
    ad_number:string;  
    status:boolean;

}
import AppError from '../../../shared/errors/AppError'

class CreateOffersService{
    public async execute({
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
        status}:Request)
        :Promise<Offers>{
        const offersRepsitory = getRepository(Offers)

             
        const offer = offersRepsitory.create({
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
        await offersRepsitory.save(offer)

        return offer
    }

    public async viewOffers(id:string):Promise<Offers>{
        const offerRepsitory = getRepository(Offers)

        const offer  = await offerRepsitory.findOne({
            where: {id}
        })
        
        if (!offer){
            throw new AppError('Offers not found')
        }
        return offer

    }

    public async getall(){
        const offerAll = await getRepository(Offers)
            
        const offer = await offerAll.find()


        
        return (offer)

    }

    public async delete(id: string) {
        const offerDelete = getRepository(Offers)
        const offer = await offerDelete.findOne({where:{id:String(id)}})   
        if(!offer){
            throw new AppError('Offers not found.',404)
        } 
        
        await offerDelete.save(offer)

    }

    public async update(
        id:string,
        type_offer:string,
        user_id:string,
        product_id:string,
        attr_id:string,
        price:string,
        amount:string,
        form_of_stock:string,
        zipcode:string,
        state:string,
        city:string,
        district:string,
        region:string,
        address:string,
        ad_number:string,  
        status:boolean,
        comments:string,):Promise<Offers> {
        const repositoryOffers = getRepository(Offers)
        const offer = await repositoryOffers.findOne({ where: { id:String(id) } })
        
        if(!offer){
            throw new AppError('Offers not found.',404)
        }  
        offer.type_offer= type_offer,
        offer.user_id=user_id,
        offer.product_id=product_id,
        offer.attr_id=attr_id,
        offer.price=price,
        offer.amount=amount,
        offer.form_of_stock=form_of_stock,
        offer.zipcode=zipcode,
        offer.state=state,
        offer.city=city,
        offer.district=district,
        offer.region=region,
        offer.address=address,
        offer.ad_number=ad_number,
        offer.status=status,
        offer.comments=comments           
        await repositoryOffers.save(offer)
          
        return offer
    }    
    
    
}

export default CreateOffersService