import {Entity,OneToMany,Column,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn} from 'typeorm'

 
import Offer from '@modules/offers/infra/typeorm/entities/offers'

@Entity('userss')
class Users{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    
    @Column("integer")
    order:number;

    @Column()
    name:string;
    
    @Column()
    email:string;
    
    @Column()
    birthday:string;
    
    @Column()
    cpf_cnpj:string;
    
    @Column()
    phone:string;
    
    @Column()
    avatar :string;
    
        
    @Column()
    whatsapp:string;

    @Column()
    password:string;
   
    @Column()
    user_type:string;

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