import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,
    OneToMany
} from 'typeorm'
import Offer from '@modules/offers/infra/typeorm/entities/offers'
import Product from '@modules/products/infra/typeorm/entities/product'

@Entity('product_atributes')
class Product_atributes{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('integer')
    order:number;
    
    @Column()
    name:string;

    @Column()
    product_id:string;

    @ManyToOne(()=>Product)
    @JoinColumn({name:'product_id'})
    product: Product

    // @OneToMany(() => Offer, offer => offer.atributes)
    // offer: Offer[];
   
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  
   
}

export default Product_atributes