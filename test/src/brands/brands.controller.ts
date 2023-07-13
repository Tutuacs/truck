import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './Validation/create-brand.dto';
import { UpdateBrandDto } from './Validation/update-brand.dto';
import { AuthGuard, RoleGuard } from 'src/guards';
import { Acess, Role } from 'src/decorators';

@UseGuards(AuthGuard, RoleGuard)
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Acess(Role.Admin)
  @Post()
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.create(createBrandDto);
  }
  
  @Get()
  findAll() {
    return this.brandsService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandsService.findOne(+id);
  }
  
  @Acess(Role.Admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandsService.update(+id, updateBrandDto);
  }

  @Acess(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandsService.remove(+id);
  }
}
