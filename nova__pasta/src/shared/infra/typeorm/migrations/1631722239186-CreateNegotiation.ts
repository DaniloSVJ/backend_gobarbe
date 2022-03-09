import {MigrationInterface, QueryRunner,Table,TableForeignKey} from "typeorm";

export default class CreateNegotiation1631722239186 implements MigrationInterface {

    public  async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'negotiation',
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
                        name:'buyer_id',
                        type:'uuid',
                        isNullable: true,
                    },
                    {
                        name:'vendor_id',
                        type:'uuid',
                        isNullable: true,
                       
                    },
                    {
                        name:'offer_id',
                        type:'uuid',
                        isNullable: true,
                    },

                    {
                        name: 'status',
                        type: 'varchar',
                    
                    },
                    {
                        name:'contract',
                        type:'varchar',
                       
                    },
                    {
                        name:'date_conclusion',
                        type:'timestamp',
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
                    },
            
                    
                ]
            })
            
        )
        await queryRunner.createForeignKey(
            'negotiation',
            new TableForeignKey({
              name: 'UserBuyerFK',
              columnNames: ['buyer_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'userss',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
        );
        await queryRunner.createForeignKey(
            'negotiation',
            new TableForeignKey({
              name: 'UserVendorFK',
              columnNames: ['vendor_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'userss',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
        );
        await queryRunner.createForeignKey(
            'negotiation',
            new TableForeignKey({
              name: 'OfferFK',
              columnNames: ['offer_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'offer',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
        );

    }

  
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('negotiation','UserBuyerFK')
        await queryRunner.dropForeignKey('negotiation','OfferFK')
        await queryRunner.dropForeignKey('negotiation','AtributesFK')
        await queryRunner.dropTable('negotiation')
    }

}
