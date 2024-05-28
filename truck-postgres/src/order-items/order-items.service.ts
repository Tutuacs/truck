import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { OrderItemsAbstract } from './functions/order-items-abstract';

@Injectable()
export class OrderItemsService {

  constructor(private readonly orderItemsFunction: OrderItemsAbstract) {}

  create(data: CreateOrderItemDto) {
    return this.orderItemsFunction.createOrderItem(data);
  }

  findAll() {
    // orderItemsFunction.listOrderItem(id);
    return `This action returns all orderItems`;
  }

  findOne(id: string) {
    return this.orderItemsFunction.findOrderItem(id);
  }

  update(id: string, data: UpdateOrderItemDto) {
    return this.orderItemsFunction.updateOrderItem(id, data);
  }

  remove(id: string) {
    return this.orderItemsFunction.removeOrderItem(id);
  }
}
