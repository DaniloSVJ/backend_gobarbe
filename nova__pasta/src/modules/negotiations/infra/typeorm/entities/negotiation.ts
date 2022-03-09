import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,
    
} from 'typeorm'

import User from '@modules/users/infra/typeorm/entities/users'
import Offer from '@modules/offers/infra/typeorm/entities/offers' 


@Entity('userss')
class Users{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    
    @Column("integer")
    order:number;
   
    @Column()
    buyer_id:string;
    
    @Column()
    vendor_id:string;
   
    @Column()
    offer_id:string;

    @ManyToOne(()=>User)
    @JoinColumn({name:'buyer_id'})
    buyer: User

    @ManyToOne(()=>User)
    @JoinColumn({name:'vendor_id'})
    vendo: User

    @ManyToOne(()=>Offer)
    @JoinColumn({name:'offer_id'})
    offer: Offer

    @Column()
    status:string;
    
   
    @Column()
    contract:string;  

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
   
}

export default Users