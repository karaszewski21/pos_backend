import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1588927366761 implements MigrationInterface {
    name = 'Init1588927366761'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `login` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `password` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `password`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `login`", undefined);
    }

}
