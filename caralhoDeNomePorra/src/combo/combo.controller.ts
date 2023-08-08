import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ComboService } from './combo.service';
import { CreateComboDto } from './Validation/create-combo.dto';
import { UpdateComboDto } from './Validation/update-combo.dto';
import { Acess, Role } from 'src/decorators';
import { AuthGuard, RoleGuard } from 'src/guards';

@UseGuards(AuthGuard, RoleGuard)
@Controller('combo')
export class ComboController {
  constructor(private readonly comboService: ComboService) {}

  @Acess(Role.Admin)
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
  
  @Acess(Role.Admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateComboDto) {
    return this.comboService.update(id, data);
  }
  
  @Acess(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comboService.remove(id);
  }
}
