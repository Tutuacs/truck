import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { CreateOrderItemDto, ManyOrderItemsDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  // @Post()
  // create(@Body() data: CreateOrderItemDto) {
  //   return this.orderItemsService.create(data);
  // }

  @Post()
  createMany(@Body() data: ManyOrderItemsDto) {
    return this.orderItemsService.createMany(data);
  }

  @Get()
  findAll() {
    return this.orderItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderItemsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateOrderItemDto) {
    return this.orderItemsService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderItemsService.remove(id);
  }
}
