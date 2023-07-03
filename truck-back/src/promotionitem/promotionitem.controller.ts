import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PromotionitemService } from './promotionitem.service';
import { CreatePromotionitemDto } from './Validation/create-promotionitem.dto';
import { UpdatePromotionitemDto } from './Validation/update-promotionitem.dto';

@Controller('promotionitem')
export class PromotionitemController {
  constructor(private readonly promotionitemService: PromotionitemService) {}

  @Post()
  create(@Body() data: CreatePromotionitemDto) {
    return this.promotionitemService.create(data);
  }

  @Get()
  findAll() {
    return this.promotionitemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.promotionitemService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdatePromotionitemDto) {
    return this.promotionitemService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.promotionitemService.remove(id);
  }
}
