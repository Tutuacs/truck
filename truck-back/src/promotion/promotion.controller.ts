import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { CreatePromotionDto } from './Validation/create-promotion.dto';
import { UpdatePromotionDto } from './Validation/update-promotion.dto';

@Controller('promotion')
export class PromotionController {
  constructor(private readonly promotionService: PromotionService) {}

  @Post()
  create(@Body() data: CreatePromotionDto) {
    return this.promotionService.create(data);
  }

  @Get()
  findAll() {
    return this.promotionService.findAll();
  }

  @Get(':id')
  findOne(@Param() id: string) {
    return this.promotionService.findOne(id);
  }

  @Patch(':id')
  update(@Param() id: string, @Body() data: UpdatePromotionDto) {
    return this.promotionService.update(id, data);
  }

  @Delete(':id')
  remove(@Param() id: string) {
    return this.promotionService.remove(id);
  }
}
