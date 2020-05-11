import { Controller, Get, Post, Param, Body, Req } from '@nestjs/common';
import {getManager} from "typeorm";
import { EntityManagerService } from '../../../services/entity-manager/entity-manager.service';
import { Product } from '../../../entity/Product';

@Controller('admin/product')
export class ProductController {

  constructor(private entityManagerService: EntityManagerService) {}

  @Get('get/:id')
  async findOne(@Param() params): Promise<Product[]> {

    return await (await this.entityManagerService.getManager()).findByIds(Product, params.id);
  }

  @Get('list')
  async findAll(): Promise<Product[]> {
    
    return await (await this.entityManagerService.getManager()).find<Product>(Product)
  }

  @Post('create')
  async create(@Body() body: Product): Promise<Product> {
    let product = new Product();

    product.name = body.name;
    product.description = body.description;
    product.amount = body.amount;
    product.quantity = body.quantity;
    product.active = body.active;

    console.log(body);
    return await (await this.entityManagerService.getManager()).save(product);
  }
  
}
