import { Controller, Get, Param, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { Recipe } from '../../../entity/Recipe';
import { EntityManagerService } from '../../../services/entity-manager/entity-manager.service';
import { Offer } from '../../../entity/Offer';
import { Product } from '../../../entity/Product';
import { RecipeItem } from '../../../entity/RecipeItem';
import { json } from 'express';
import {JsonConvert, OperationMode, ValueCheckingMode} from "json2typescript"
import { throwError } from 'rxjs';
import { getManager, EntityManager, getConnection } from 'typeorm';
import { resolve } from 'url';
import { RecipeService } from '../../../services/recipe/recipe/recipe.service';

@Controller('admin/recipe')
export class RecipeController {

  constructor(private entityManagerService: EntityManagerService, private recipeService: RecipeService) {}

  @Get('get/:id')
  async findOne(@Param() params): Promise<Recipe[]> {

    return await (await this.entityManagerService.getManager()).findByIds(Recipe, params.id);
  }

  @Get('list')
  async findAll(): Promise<Recipe[]> {
    
    return await (await this.entityManagerService.getManager()).find<Recipe>(Recipe)
  }

  @Post('create')
  async create(@Body() body: string): Promise<Recipe>{

    return this.recipeService.saveRecipe(body);
  }

  @Post('offerToRecipe')
  async offerToRecipe(@Body() bodyRecipeItems: RecipeItem[]): Promise<RecipeItem[]> {

    console.log(bodyRecipeItems);

    (await this.entityManagerService.getManager()).transaction(async transactionalEntityManager => {

      for (const bodyRecipeItem of bodyRecipeItems) {

        let recipeItem = new RecipeItem();
        recipeItem.amount_portion = bodyRecipeItem.amount_portion
        recipeItem.product = bodyRecipeItem.product;

        await transactionalEntityManager.save(recipeItem);
      }
    })
    
    return await (await this.entityManagerService.getManager()).find<RecipeItem>(RecipeItem);
  }
}
