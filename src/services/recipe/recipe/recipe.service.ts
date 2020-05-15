import { Injectable } from '@nestjs/common';
import { Recipe } from '../../../entity/Recipe';
import { getConnection, EntityManager } from 'typeorm';
import { Product } from '../../../entity/Product';
import { RecipeItem } from '../../../entity/RecipeItem';
import { EntityManagerService } from '../../entity-manager/entity-manager.service';

@Injectable()
export class RecipeService {

    constructor(private entityManagerService: EntityManagerService) {
        
    }

    public async saveRecipe(body: string): Promise<Recipe> {

        const connection = getConnection();
        const queryRunner = connection.createQueryRunner();
    
        await queryRunner.connect();
        await queryRunner.startTransaction();
    
        try {
            let recipe = await this.saveRecipeToDatabase(body)
            await queryRunner.manager.save(recipe);
            await this.saveRecipeItemsToDatabase(recipe,body,queryRunner.manager);
            await queryRunner.commitTransaction();
    
          return Promise.resolve(recipe)
    
        } catch (err) {
            await queryRunner.rollbackTransaction();
    
        } finally {
            await queryRunner.release();
        }
    }

    private saveRecipeToDatabase(body: string): Promise<Recipe> {

        let recipeObj = JSON.parse(JSON.stringify(body));

        const recipe  = new Recipe();
        recipe.name = recipeObj.recipeBody.name;
        recipe.description = recipeObj.recipeBody.description;
        recipe.recipeItems = [];

        return Promise.resolve(recipe);
    }

    private saveRecipeItemsToDatabase(recipe: Recipe, body: string, entityManager: EntityManager): void {

        let recipeObj = JSON.parse(JSON.stringify(body));

        recipeObj.recipeBody.recipeItems.forEach(async recipeItem => {

        let product = await (await this.entityManagerService.getManager()).findByIds(Product, [recipeItem.productId]);
    
        let newRecipeItem = new RecipeItem()
            newRecipeItem.amount_portion = recipeItem.amount_portion
            newRecipeItem.product = product[0]
            newRecipeItem.recipe = recipe;

        entityManager.save(newRecipeItem);

        });
    }
}
