import { Module } from '@nestjs/common';
import { AdminModule } from './controller/admin/admin.module';
import { OrderModule } from './controller/order/order.module';
import { AppController } from './app.controller';

@Module({
  imports: [AdminModule, OrderModule],
  controllers: [AppController],
})
export class AppModule {}
