import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AddTruckDto } from 'src/truck/dto/add-truck.dto';
import { Acess, Role } from 'src/decorators';
import { AuthGuard, RoleGuard } from 'src/guards';

@UseGuards(AuthGuard, RoleGuard)
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Acess(Role.Admin)
  @Post()
  create(@Body() data: CreateProductDto) {
    return this.productService.create(data);
  }
  
  @Get()
  findAll() {
    return this.productService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }
  
  @Acess(Role.Admin)
  @Post('link-truck/:id')
  linkTruck(@Body() trucks: AddTruckDto, @Param('id') id: string) {
    return this.productService.linkTruck(trucks, id);
  }
  
  @Acess(Role.Admin)
  @Post('unlink-truck/:id')
  unlinkTruck(@Body() trucks: AddTruckDto, @Param('id') id: string) {
    return this.productService.unlinkTruck(trucks, id);
  }
  
  @Acess(Role.Admin)
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateProductDto) {
    return this.productService.update(id, data);
  }
  
  @Acess(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
