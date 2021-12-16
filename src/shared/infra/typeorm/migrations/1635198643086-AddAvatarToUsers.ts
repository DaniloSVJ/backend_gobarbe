import {MigrationInterface, QueryRunner,TableColumn} from "typeorm";

export class AddAvatarToUsers1635198643086 implements MigrationInterface {

  
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('userss', new TableColumn(
            {
                name: 'avatar',
                type: 'varchar',
                isNullable:true
            },
            

        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('userss','avatar')
    }

}
