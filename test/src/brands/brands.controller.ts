import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './Validation/create-brand.dto';
import { UpdateBrandDto } from './Validation/update-brand.dto';
import { AuthGuard, RoleGuard } from 'src/guards';
import { Acess, Role } from 'src/decorators';

@Controller('brand')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}
  
  @UseGuards(AuthGuard, RoleGuard)
  @Acess(Role.Admin)
  @Post()
  create(@Body() data: CreateBrandDto) {
    return this.brandsService.create(data);
  }
  
  @Get()
  findAll() {
    return this.brandsService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandsService.findOne(id);
  }
  
  @UseGuards(AuthGuard, RoleGuard)
  @Acess(Role.Admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateBrandDto) {
    return this.brandsService.update(id, data);
  }
  
  @UseGuards(AuthGuard, RoleGuard)
  @Acess(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandsService.remove(id);
  }
}
