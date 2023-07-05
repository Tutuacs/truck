import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './Validation/create-product.dto';
import { UpdateProductDto } from './Validation/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateProductDto) {
    data.price = Number(data.price);
    return this.prisma.createProduct(data);
  }

  async connect(connect: string, idd: string, id: string) {
    console.log(connect)
    console.log(idd)
    console.log(id)
    if (connect === 'connect') {
      await this.prisma.existUserTruckId(idd);
      await this.prisma.existProductId(id);
      return this.prisma.connectTP(idd,id);
    } else if (connect === 'disconnect') {
      await this.prisma.existUserTruckId(idd);
      await this.prisma.existProductId(id);
      return this.prisma.disconnectTP(idd,id);
    } else {
      throw new NotFoundException('Comando não reconhecido');
    }
  }

  findAll() {
    return this.prisma.findAllProducts();
  }

  findOne(id: string) {
    return this.prisma.findUniqProduct(id);
  }

  update(id: string, data: UpdateProductDto) {
    return this.prisma.updateProduct(id, data);
  }

  remove(id: string) {
    return this.prisma.removeProduct(id);
  }
}
