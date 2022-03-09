import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,
    OneToOne
    
} from 'typeorm'

import User from '@modules/users/infra/typeorm/entities/users'
import Product from '@modules/products/infra/typeorm/entities/product' 
import Product_Atributes from '@modules/productAtributes/infra/typeorm/entities/product_atributes'

@Entity('offer')
class Users{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    
    @Column("integer")
    order:number;

    @Column()
    type_offer:string;
     
   
    
    @Column()
    user_id:string;
    
    @Column()
    product_id:string;
   
    @Column()
    attr_id:string;

    @OneToOne(()=>User)
    @JoinColumn({name:'user_id'})
    user: User

    @OneToOne(()=>Product)
    @JoinColumn({name:'product_id'})
    product: Product

    @OneToOne(()=>Product_Atributes)
    @JoinColumn({name:'attr_id'})
    atributes: Product_Atributes

    @Column()
    price:string;

    @Column()
    amount:string;

    @Column()
    form_of_stock:string;

    @Column()
    comments:string;

    @Column()
    zipcode:string;

    @Column()
    state:string;
    
    @Column()
    city:string;
        
    @Column()
    district:string;
    
    @Column()
    region:string;

    @Column()
    address:string;
    
    @Column()
    ad_number:string;  

    @Column('boolean')
    status:boolean;

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  
   
}

export default Users