import { ProductVerify } from './product-exist.filter';
import { ProductAbstract } from './product-abstract';
import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '@prisma/client';
import { UpdateProductDto } from '../dto/update-product.dto';
import { AddRelationDto } from 'src/truck/dto/add-truck.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductFunction extends ProductVerify implements ProductAbstract {
  constructor(prisma: PrismaService) {
    super(prisma);
  }

  createProduct(data: CreateProductDto): Promise<Product> {
    return this.prisma.product.create({ data });
  }

  findProduct(id: string): Promise<Product> {
    return this.prisma.product.findUnique({ where: { id } });
  }

  listProduct(): Promise<Product[]> {
    return this.prisma.product.findMany({
      include: {
        Truck: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  updateProduct(id: string, data: UpdateProductDto): Promise<Product> {
    return this.prisma.product.update({ where: { id }, data });
  }

  removeProduct(id: string): Promise<Product> {
    return this.prisma.product.delete({ where: { id } });
  }

  async linkTruck(data: AddRelationDto, id: string) {
    const product = await this.prisma.product.update({
      where: {
        id,
      },
      data: {
        Truck: {
          connect: data.relation,
        },
      },
      select: {
        Truck: true,
      },
    });
    return product.Truck;
  }

  async linkedProducts(id: string) {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        RelatedWith: true,
      },
    });
  }

  async linkVariation(data: AddRelationDto, id: string, type: string) {
    if (type.toLowerCase() === 'connect') {
      return this.prisma.product.update({
        where: {
          id,
        },
        data: {
          RelationWith: {
            connect: data.relation,
          },
        },
        include: {
          RelationWith: true,
        },
      });
    } else if (type.toLowerCase() === 'disconnect') {
      return this.prisma.product.update({
        where: {
          id,
        },
        data: {
          RelationWith: {
            disconnect: data.relation,
          },
        },
        include: {
          RelationWith: true,
        },
      });
    }else{
      console.log(`Invalid type: ${type}`);
      throw new NotImplementedException("Type not implemented: " + type)
    }
  }

  async unlinkTruck(data: AddRelationDto, id: string) {
    const product = await this.prisma.product.update({
      where: {
        id,
      },
      data: {
        Truck: {
          disconnect: data.relation,
        },
      },
      select: {
        Truck: true,
      },
    });
    return product.Truck;
  }
}
