import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { EntityManagerService } from '../../../services/entity-manager/entity-manager.service';
import { OrderItem } from '../../../entity/OrderItem';

@Controller('order-item')
export class OrderItemController {

  constructor(private entityManagerService: EntityManagerService) {}

  @Get('get/:id')
  async findOne(@Param() params): Promise<OrderItem[]> {

    return await (await this.entityManagerService.getManager()).findByIds(OrderItem, params.id);
  }

  @Get('list')
  async findAll(): Promise<OrderItem[]> {
    
    return await (await this.entityManagerService.getManager()).find<OrderItem>(OrderItem)
  }

  @Post('create')
  async create(@Body() OrderItem: OrderItem): Promise<OrderItem> {

    return await (await this.entityManagerService.getManager()).save(OrderItem);
  }
}
