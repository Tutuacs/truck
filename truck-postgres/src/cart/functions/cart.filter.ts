import { Injectable } from '@nestjs/common';
import { CartAbstract } from './cart-abstract';
import { CartVerify } from './cart-exist.filter';
import { CreateCartDto } from '../dto/create-cart.dto';
import { UpdateCartDto } from '../dto/update-cart.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartFunctions extends CartVerify implements CartAbstract {
  constructor(prisma: PrismaService) {
    super(prisma);
  }

  createCart(data: CreateCartDto) {
    return this.prisma.cart.create({
      data: {
        userId: data.userId,
      },
    });
  }
  updateCart(id: string, data: UpdateCartDto) {
    return this.prisma.cart.update({
      where: {
        id,
      },
      data,
    });
  }

  /*
        abstract findCartByProfile(profileId: string): Promise<Cart>;
    abstract findCartByUser(userId: string): Promise<Cart>;
    abstract findCart(id: string): Promise<Cart>;
    abstract listCart(): Promise<Cart[]>;
    */

  async findCartByProfile(profileId: string) {
    const profile = await this.prisma.profile.findFirst({
      where: {
        id: profileId,
      },
      select: {
        User: {
          select: {
            Cart: true,
          },
        },
      },
    });
    return profile.User.Cart;
  }

  async findCartByUser(userId: string) {
    return this.prisma.cart.findFirst({
      where: {
        userId,
      },
    });
  }

  async findCart(id: string) {
    return this.prisma.cart.findUnique({
      where: {
        id,
      },
    });
  }

    async listCart() {
        return this.prisma.cart.findMany();
    }

    linkComboToCart(comboId: string, cartId: string) {
        return this.prisma.cart.update({
            where: {
                id: cartId,
            },
            data: {
                Combo: {
                    connect: {
                        id: comboId,
                    },
                },
            },
        });
    }

    unlinkComboFromCart(comboId: string, cartId: string) {
        return this.prisma.cart.update({
            where: {
                id: cartId,
            },
            data: {
                Combo: {
                    disconnect: {
                        id: comboId,
                    },
                },
            },
        });
    }

    linkProductToCart(productId: string, cartId: string) {
        return this.prisma.cart.update({
            where: {
                id: cartId,
            },
            data: {
                Product: {
                    connect: {
                        id: productId,
                    },
                },
            },
        });
    }

    unlinkProductFromCart(productId: string, cartId: string) {
        return this.prisma.cart.update({
            where: {
                id: cartId,
            },
            data: {
                Product: {
                    disconnect: {
                        id: productId,
                    },
                },
            },
        });
    }
    
}
