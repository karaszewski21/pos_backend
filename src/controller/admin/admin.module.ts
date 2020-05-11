import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { ProductController } from './product/product.controller';
import { OfferController } from './offer/offer.controller';
import { RecipeController } from './recipe/recipe.controller';
import { EntityManagerService } from '../../services/entity-manager/entity-manager.service';

@Module({
  controllers: [AdminController, ProductController, OfferController, RecipeController],
  providers: [EntityManagerService],
})
export class AdminModule {}
