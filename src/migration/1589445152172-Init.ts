import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1589445152172 implements MigrationInterface {
    name = 'Init1589445152172'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `recipe` DROP FOREIGN KEY `FK_f2372e7b8dd6d91e23f1020db0c`", undefined);
        await queryRunner.query("CREATE TABLE `recipe_item` (`id` int NOT NULL AUTO_INCREMENT, `amount_portion` double NOT NULL, `recipeId` int NULL, `productId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `recipe` DROP COLUMN `offerId`", undefined);
        await queryRunner.query("ALTER TABLE `recipe_item` ADD CONSTRAINT `FK_ca55b4103acde77f1261a7375a4` FOREIGN KEY (`recipeId`) REFERENCES `recipe`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `recipe_item` ADD CONSTRAINT `FK_e3dac4000afd3471e67cc0480f9` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `recipe_item` DROP FOREIGN KEY `FK_e3dac4000afd3471e67cc0480f9`", undefined);
        await queryRunner.query("ALTER TABLE `recipe_item` DROP FOREIGN KEY `FK_ca55b4103acde77f1261a7375a4`", undefined);
        await queryRunner.query("ALTER TABLE `recipe` ADD `offerId` int NULL", undefined);
        await queryRunner.query("DROP TABLE `recipe_item`", undefined);
        await queryRunner.query("ALTER TABLE `recipe` ADD CONSTRAINT `FK_f2372e7b8dd6d91e23f1020db0c` FOREIGN KEY (`offerId`) REFERENCES `offer`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

}
