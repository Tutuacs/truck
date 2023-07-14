import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './Validation/create-product.dto';
import { UpdateProductDto } from './Validation/update-product.dto';
import { AuthGuard, RoleGuard } from 'src/guards';
import { Acess, Role } from 'src/decorators';

@UseGuards(RoleGuard, AuthGuard)
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Acess(Role.Admin)
  @Post()
  create(@Body() data: CreateProductDto) {
    return this.productService.create(data);
  }

  @Acess(Role.Admin)
  @Post('connectTruck/:connect/:truckId/:productId')
  connect(@Param('connect') connect: string, @Param('truckId') truckId: string, @Param('productId') productId: string) {
    return this.productService.connect(connect,truckId,productId);
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
  @Patch(':id')
  update(@Param() id: string, @Body() data: UpdateProductDto) {
    return this.productService.update(id, data);
  }

  @Acess(Role.Admin)
  @Delete(':id')
  remove(@Param() id: string) {
    return this.productService.remove(id);
  }
}
