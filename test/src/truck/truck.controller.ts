import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TruckService } from './truck.service';
import { CreateTruckDto } from './Validation/create-truck.dto';
import { UpdateTruckDto } from './Validation/update-truck.dto';

@Controller('truck')
export class TruckController {
  constructor(private readonly truckService: TruckService) {}

  @Post()
  create(@Body() data: CreateTruckDto) {
    return this.truckService.create(data);
  }

  @Post(':connect/:id/:idd')
  connect(@Param('connect') connect: string, @Param('id') id: string, @Param('idd') idd: string) {
    return this.truckService.connect(id,idd,connect);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.truckService.findOne(id);
  }

  @Get('all/:brand')
  findAll(@Param('brand') brand: string) {
    return this.truckService.findAll(brand);
  }

  @Patch(':id')
  update(@Param() id: string, @Body() data: UpdateTruckDto) {
    return this.truckService.update(id, data);
  }

  @Delete(':id')
  remove(@Param() id: string) {
    return this.truckService.remove(id);
  }
}