import { Module } from '@nestjs/common';
import { OrderController } from './order/order.controller';
import { OrderItemController } from './order-item/order-item.controller';
import { EntityManagerService } from '../../services/entity-manager/entity-manager.service';

@Module({
  controllers: [OrderController, OrderItemController],
  providers: [EntityManagerService]
})
export class OrderModule {}
