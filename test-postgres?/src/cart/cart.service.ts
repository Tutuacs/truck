import { Injectable, NotImplementedException } from '@nestjs/common';
import { UpdateCartDto } from './Validation/update-cart.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  async connectProduct(
    param:{connect: string, option: string, id:string},
    userId: string,
  ) {
    await this.prisma.existUserId(userId);
    if (param.connect == 'connect') {
      if(param.option == 'combo'){
        await this.prisma.existComboId(param.id);
        return this.prisma.cartConnectComboId(userId,param.id);
      }else if(param.option == 'product'){
        await this.prisma.existProductId(param.id);
        return this.prisma.cartConnectProductId(userId,param.id);
      }else{
        throw new NotImplementedException(`Opção "${param.option}" não conhecida`);
      }
    } else if (param.connect == 'disconnect') {
      if(param.option == 'combo'){
        await this.prisma.existComboId(param.id);
        return this.prisma.cartDisconnectComboId(userId,param.id);
      }else if(param.option == 'product'){
        await this.prisma.existProductId(param.id);
        return this.prisma.cartDisconnectProductId(userId,param.id);
      }else{
        throw new NotImplementedException(`Opção "${param.option}" não conhecida`);
      }
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
