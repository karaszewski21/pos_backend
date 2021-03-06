import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { EntityManagerService } from '../../../services/entity-manager/entity-manager.service';
import { Offer } from '../../../entity/Offer';

@Controller('admin/offer')
export class OfferController {
        
  constructor(private entityManagerService: EntityManagerService) {}

  @Get('get/:id')
  async findOne(@Param() params): Promise<Offer[]> {

    return await (await this.entityManagerService.getManager()).findByIds(Offer, params.id);
  }

  @Get('list')
  async findAll(): Promise<Offer[]> {
    
    return await (await this.entityManagerService.getManager()).find<Offer>(Offer)
  }

  @Post('create')
  async create(@Body() bodyOffer: Offer): Promise<Offer> {
    let offer = new Offer()
    offer.name = bodyOffer.name
    offer.quantity = 1
    offer.description = bodyOffer.description
    offer.active = bodyOffer.active

    return await (await this.entityManagerService.getManager()).save(offer);
  }
}
