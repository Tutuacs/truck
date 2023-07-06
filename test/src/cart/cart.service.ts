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
      return this.prisma.existGoCartId(id,idd);
    } else if (connect == 'disconnect') {
      await this.prisma.existCartId(id, userId);
      return this.prisma.existGoCartId(id,idd);
    } else {
      throw new NotImplementedException(`Opção "${connect}" não conhecida`);
    }
  }

  findAll() {
    return this.prisma.findAllCarts();
  }

  findOne(id: string) {
    return this.prisma.findUniqCart(id);
  }

  update(id: string, data: UpdateCartDto) {
    return this.prisma.updateCart(id,data);
  }

}
