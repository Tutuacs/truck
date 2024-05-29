import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { AuthGuard, RoleGuard } from 'src/guards';
import { Acess, Role } from 'src/decorators';

@UseGuards(AuthGuard, RoleGuard)
@Controller('promotion')
export class PromotionController {
  constructor(private readonly promotionService: PromotionService) {}

  @Acess(Role.Admin)
  @Post()
  create(@Body() data: CreatePromotionDto) {
    return this.promotionService.create(data);
  }
  
  @Get()
  findAll() {
    return this.promotionService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.promotionService.findOne(id);
  }
  
  @Acess(Role.Admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdatePromotionDto) {
    return this.promotionService.update(id, data);
  }
  
  @Acess(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.promotionService.remove(id);
  }
}
