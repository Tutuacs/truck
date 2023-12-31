import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './Validation/create-order.dto';
import { UpdateOrderDto } from './Validation/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOrderDto) {
    data.products.forEach((item) => {
      this.prisma.existProductId(item.id);
    });
    return data;
  }

  async verifyprice() {}

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: string) {
    return `This action returns a #${id} order`;
  }

  update(id: string, data: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: string) {
    return `This action removes a #${id} order`;
  }
}
