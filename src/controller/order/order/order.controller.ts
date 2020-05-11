import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { EntityManagerService } from '../../../services/entity-manager/entity-manager.service';
import { Order } from '../../../entity/Order';

@Controller('order')
export class OrderController {

  constructor(private entityManagerService: EntityManagerService) {}

  @Get('get/:id')
  async findOne(@Param() params): Promise<Order[]> {

    return await (await this.entityManagerService.getManager()).findByIds(Order, params.id);
  }

  @Get('list')
  async findAll(): Promise<Order[]> {
    
    return await (await this.entityManagerService.getManager()).find<Order>(Order)
  }

  @Post('create')
  async create(@Body() Order: Order): Promise<Order> {

    return await (await this.entityManagerService.getManager()).save(Order);
  }
}
