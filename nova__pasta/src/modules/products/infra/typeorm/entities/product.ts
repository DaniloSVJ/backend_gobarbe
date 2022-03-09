import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
} from 'typeorm'
import Offer from '@modules/offers/infra/typeorm/entities/offers'
import Atribute from '@modules/productAtributes/infra/typeorm/entities/product_atributes'


@Entity('product')
class Product{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('integer')
    order:number;
    
    @Column()
    name:string;
    
    @Column('boolean')
    status:boolean;

    // @OneToMany(() => Atribute, atribute => atribute.product)
    // atribute: Atribute[];

    // @OneToMany(() => Offer, offer => offer.atributes)
    // offer: Offer[];

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  
   
}

export default Product