import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CapacityService } from './capacity.service';
import { CreateCapacityDto } from './Validation/create-capacity.dto';
import { UpdateCapacityDto } from './Validation/update-capacity.dto';

@Controller('capacity')
export class CapacityController {
  constructor(private readonly capacityService: CapacityService) {}

  @Post()
  create(@Body() data: CreateCapacityDto) {
    return this.capacityService.create(data);
  }

  @Get('all/:model')
  findAll(@Param('model') model: string) {
    return this.capacityService.findAll(model);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.capacityService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateCapacityDto) {
    return this.capacityService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.capacityService.remove(id);
  }
}
