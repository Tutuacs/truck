import { CartAbstract } from './cart-abstract';
import { CartVerify } from './cart-exist.filter';
import { CreateCartDto } from '../dto/create-cart.dto';
import { UpdateCartDto } from '../dto/update-cart.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CartFunctions extends CartVerify implements CartAbstract {
    constructor(prisma: PrismaService);
    createCart(data: CreateCartDto): import("@prisma/client").Prisma.Prisma__CartClient<{
        id: string;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateCart(id: string, data: UpdateCartDto): import("@prisma/client").Prisma.Prisma__CartClient<{
        id: string;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findCartByProfile(profileId: string): Promise<{
        id: string;
        userId: string;
    }>;
    findCartByUser(userId: string): Promise<{
        id: string;
        userId: string;
    }>;
    findCart(id: string): Promise<{
        id: string;
        userId: string;
    }>;
    listCart(): Promise<{
        id: string;
        userId: string;
    }[]>;
    linkComboToCart(comboId: string, cartId: string): import("@prisma/client").Prisma.Prisma__CartClient<{
        id: string;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    unlinkComboFromCart(comboId: string, cartId: string): import("@prisma/client").Prisma.Prisma__CartClient<{
        id: string;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    linkProductToCart(productId: string, cartId: string): import("@prisma/client").Prisma.Prisma__CartClient<{
        id: string;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    unlinkProductFromCart(productId: string, cartId: string): import("@prisma/client").Prisma.Prisma__CartClient<{
        id: string;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
