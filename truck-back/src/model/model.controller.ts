import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ModelService } from './model.service';
import { CreateModelDto } from './Validation/create-model.dto';
import { UpdateModelDto } from './Validation/update-model.dto';
import { ConnectCapacityDto } from './Validation/connect-capacity.dto';

@Controller('model')
export class ModelController {
  constructor(private readonly modelService: ModelService) {}

  @Post()
  create(@Body() data: CreateModelDto) {
    return this.modelService.create(data);
  }

  @Post(':connect/:id/:idd')
  connect(@Param('idd') idd: string, @Param('id') id: string,  @Param('connect') connect: string) {
    return this.modelService.connect(id,idd,connect);
  }

  @Get('all/:truck')
  findAll(@Param('truck') truck: string) {
    return this.modelService.findAll(truck);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modelService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateModelDto) {
    return this.modelService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modelService.remove(id);
  }
}
