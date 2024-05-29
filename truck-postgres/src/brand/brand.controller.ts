import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { AuthGuard, RoleGuard } from 'src/guards';
import { Acess, Role } from 'src/decorators';

@UseGuards(AuthGuard, RoleGuard)
@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Acess(Role.Admin)
  @Post()
  create(@Body() data: CreateBrandDto) {
    return this.brandService.create(data);
  }
  
  @Get()
  findAll() {
    return this.brandService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandService.findOne(id);
  }
  
  @Acess(Role.Admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateBrandDto) {
    return this.brandService.update(id, data);
  }
  
  @Acess(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandService.remove(id);
  }
}
