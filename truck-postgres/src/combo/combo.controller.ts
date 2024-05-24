import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComboService } from './combo.service';
import { CreateComboDto } from './dto/create-combo.dto';
import { UpdateComboDto } from './dto/update-combo.dto';

@Controller('combo')
export class ComboController {
  constructor(private readonly comboService: ComboService) {}

  @Post()
  create(@Body() data: CreateComboDto) {
    return this.comboService.create(data);
  }

  @Get()
  findAll() {
    return this.comboService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comboService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateComboDto) {
    return this.comboService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comboService.remove(id);
  }
}
