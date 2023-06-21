import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './Validation/create-product.dto';
import { UpdateProductDto } from './Validation/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {

  constructor(private readonly prisma:PrismaService) {}

  create(data: CreateProductDto) {
    return this.prisma.createProduct(data);
  }

  findAll() {
    return this.prisma.findAllProducts();
  }

  findOne(id: string) {
    return this.prisma.findUniqProduct(id);
  }

  update(id: string, data: UpdateProductDto) {
    return this.prisma.updateProduct(id,data);
  }

  remove(id: string) {
    return this.prisma.removeProduct(id);
  }
}
