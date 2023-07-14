import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './Validation/create-product.dto';
import { UpdateProductDto } from './Validation/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProductDto) {
    data.price = Number(data.price);
    if (data.promotionPrice) {
      data.promotionPrice = Number(data.promotionPrice);
    }
    if(data.minPromotion) {
      data.minPromotion = Number(data.minPromotion);
    }
    if(data.minCombo) {
      data.minCombo = Number(data.minCombo);
    }
    if (data.brandsId) {
      await this.prisma.existBrandId(data.brandsId);
    }
    if (data.comboId) {
      await this.prisma.existBrandId(data.comboId);
    }
    return this.prisma.createProduct(data);
  }

  async connect(connect: string, truckId: string, productId: string) {
    if (connect === 'connect') {
      await this.prisma.existTruckId(truckId);
      await this.prisma.existProductId(productId);
      return this.prisma.connectTP(truckId, productId);
    } else if (connect === 'disconnect') {
      await this.prisma.existTruckId(truckId);
      await this.prisma.existProductId(productId);
      return this.prisma.disconnectTP(truckId, productId);
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
