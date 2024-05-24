import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { OrderItemFunction } from './functions/order-items.filter';

@Injectable()
export class OrderItemsService {

  constructor(private readonly orderItemFunction: OrderItemFunction) {}

  create(data: CreateOrderItemDto) {
    return this.orderItemFunction.createOrderItem(data);
  }

  findAll() {
    // orderItemFunction.listOrderItem(id);
    return `This action returns all orderItems`;
  }

  findOne(id: string) {
    return this.orderItemFunction.findOrderItem(id);
  }

  update(id: string, data: UpdateOrderItemDto) {
    return this.orderItemFunction.updateOrderItem(id, data);
  }

  remove(id: string) {
    return this.orderItemFunction.removeOrderItem(id);
  }
}
