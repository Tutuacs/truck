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
    param:{connect: string, option: string, id:string},
    userId: string,
  ) {
    if (param.connect == 'connect') {
      await this.prisma.existUserId(userId);
      return this.prisma.existGoCartId(userId,param.id);
    } else if (param.connect == 'disconnect') {
      await this.prisma.existUserId(userId);
      return this.prisma.existExitCartId(userId,param.id);
    } else {
      throw new NotImplementedException(`Opção "${param.connect}" não conhecida`);
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
