import {MigrationInterface, QueryRunner,Table,TableForeignKey} from "typeorm";

export class CreateOffer1631710749236 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'offer',
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
                        name:'type_offer',
                        type:'varchar',
                       
                    },
                    {
                        name:'user_id',
                        type:'uuid',
                        isNullable: true,
                    },
                    {
                        name:'product_id',
                        type:'uuid',
                        isNullable: true,
                    },
                    {
                        name:'attr_id',
                        type:'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'price',
                        type: 'float',
                    },
                    {
                        name: 'amount',
                        type: 'integer',
                    },
                    {
                        name: 'form_of_stock',
                        type: 'varchar',
                    },
                    {
                        name: 'comments',
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
                        type: 'varchar',
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
        await queryRunner.createForeignKey(
            'offer',
            new TableForeignKey({
              name: 'UserFK',
              columnNames: ['user_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'userss',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
        );
        await queryRunner.createForeignKey(
            'offer',
            new TableForeignKey({
              name: 'ProductFK',
              columnNames: ['product_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'product',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
        );
        await queryRunner.createForeignKey(
            'offer',
            new TableForeignKey({
              name: 'AtributesFK',
              columnNames: ['attr_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'product_atributes',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
        );
    }

  
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('offer','UserFK')
        await queryRunner.dropForeignKey('offer','ProductFK')
        await queryRunner.dropForeignKey('offer','AtributesFK')
        await queryRunner.dropTable('offer')
    }

}
