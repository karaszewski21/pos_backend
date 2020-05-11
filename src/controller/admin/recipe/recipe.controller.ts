import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Recipe } from '../../../entity/Recipe';
import { EntityManagerService } from '../../../services/entity-manager/entity-manager.service';

@Controller('admin/recipe')
export class RecipeController {

  constructor(private entityManagerService: EntityManagerService) {}

  @Get('get/:id')
  async findOne(@Param() params): Promise<Recipe[]> {

    return await (await this.entityManagerService.getManager()).findByIds(Recipe, params.id);
  }

  @Get('list')
  async findAll(): Promise<Recipe[]> {
    
    return await (await this.entityManagerService.getManager()).find<Recipe>(Recipe)
  }

  @Post('create')
  async create(@Body() Recipe: Recipe): Promise<Recipe> {

    return await (await this.entityManagerService.getManager()).save(Recipe);
  }
}
