import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AddRelationDto } from 'src/truck/dto/add-truck.dto';
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

  @Get('linked-products/:id')
  linkedProducts(@Param('id') id: string) {
    return this.productService.linkedProducts(id);
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }
  
  @Acess(Role.Admin)
  @Post('link-truck/:id')
  linkTruck(@Body() relation: AddRelationDto, @Param('id') id: string) {
    return this.productService.linkTruck(relation, id);
  }
  
  @Acess(Role.Admin)
  @Post('unlink-truck/:id')
  unlinkTruck(@Body() relation: AddRelationDto, @Param('id') id: string) {
    return this.productService.unlinkTruck(relation, id);
  }
  
  @Acess(Role.Admin)
  @Post('relation-variation/:id/:type')
  linkVariation(@Body() relation: AddRelationDto, @Param('id') id: string, @Param('type') type: string) {
    return this.productService.linkVariation(relation, id, type);
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
