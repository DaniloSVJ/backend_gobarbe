import {MigrationInterface, QueryRunner,Table} from "typeorm";

export default class CreateProduct1631656308514 implements MigrationInterface {

  
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'product',
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
        await queryRunner.dropTable('product')
    }

    
}
