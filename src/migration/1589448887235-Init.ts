import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1589448887235 implements MigrationInterface {
    name = 'Init1589448887235'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `recipe` DROP COLUMN `amount_portion`", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `recipe` ADD `amount_portion` double NOT NULL", undefined);
    }

}
