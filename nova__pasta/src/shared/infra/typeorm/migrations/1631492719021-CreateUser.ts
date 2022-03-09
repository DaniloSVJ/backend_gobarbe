import {MigrationInterface, QueryRunner,Table} from "typeorm";

export default class CreateUser1631492719021 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'userss',
                columns: [
                    {
                        name:"id",
                        type: 'uuid',
                        isPrimary:true,
                        generationStrategy:'uuid',
                        default:'uuid_generate_v4()',
                    },
                    {
                        name: 'order',
                        type: 'integer',
                        isGenerated: true
                    },
                    {
                        name:'name',
                        type:'varchar',
                       
                    },
                    {
                        name:'email',
                        type:'varchar',
                        isUnique: true
                       
                    },
                    {
                        name: 'user_type',
                        type: 'varchar',
                    
                    },
                    {
                        name:'password',
                        type:'varchar',
                       
                    },
                    {
                        name: 'birthday',
                        type: 'timestamp',
                    
                    },
                   
                    {
                        name: 'cpf_cnpj',
                        type: 'varchar',
                    
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                    
                    },
                    {
                        name: 'whatsapp',
                        type: 'varchar',
                    
                    },
                    {
                        name: 'zipcode',
                        type: 'varchar',
                    
                    },
                    {
                        name: 'state',
                        type: 'varchar',
                    
                    },
                    {
                        name: 'city',
                        type: 'varchar',
                    
                    },
                    {
                        name: 'district',
                        type: 'varchar',
                    
                    },
                    
                    {
                        name: 'region',
                        type: 'varchar',
                    
                    },
                    
                    {
                        name: 'address',
                        type: 'varchar',
                    
                    },                    
                    {
                        name: 'ad_number',
                        type: 'varchar',
                    
                    },
                    
                    {
                        name: 'status',
                        type: 'boolean',
                    },
                       
                    {
                        name:'created_at',
                        type:'timestamp',
                        default:'now()',
                    },
                    {
                        name:'updated_at',
                        type:'timestamp',
                        default:'now()',
                    }
                    
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('userss')
    }

}
