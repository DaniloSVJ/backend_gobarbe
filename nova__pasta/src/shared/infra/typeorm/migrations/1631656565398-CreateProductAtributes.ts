import {MigrationInterface, QueryRunner,Table,TableForeignKey} from "typeorm";

export default class CreateProductAtributes1631656565398 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'product_atributes',
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
                        name: 'name',
                        type: 'varchar',
                        
                    },
                    {
                        name: 'product_id',
                        type: 'uuid',
                        isNullable:false
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
            'product_atributes',
            new TableForeignKey({
              name: 'ProductAtributesFK',
              columnNames: ['product_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'product',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('product_atributes','ProductAtributesFK')
        await queryRunner.dropTable('product_atributes')
    }

}
