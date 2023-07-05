import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateCartDto } from './Validation/create-cart.dto';
import { UpdateCartDto } from './Validation/update-cart.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateCartDto) {
    return 'This action adds a new cart';
  }

  async connectProduct(
    connect: string,
    id: string,
    idd: string,
    userId: string,
  ) {
    if (connect == 'connect') {
      await this.prisma.existCartId(id, userId);
      return this.prisma.existGoCartId(idd);
    } else if (connect == 'disconnect') {
      await this.prisma.existCartId(id, userId);
      return this.prisma.existGoCartId(idd);
    } else {
      throw new NotImplementedException(`Opção "${connect}" não conhecida`);
    }
  }

  findAll() {
    return `This action returns all cart`;
  }

  findOne(id: string) {
    return `This action returns a #${id} cart`;
  }

  update(id: string, data: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: string) {
    return `This action removes a #${id} cart`;
  }
}
