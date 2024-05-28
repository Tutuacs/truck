import { Injectable } from "@nestjs/common";
import { CartAbstract } from "./cart-abstract";
import { CartVerify } from "./cart-exist.filter";
import { CreateCartDto } from "../dto/create-cart.dto";
import { UpdateCartDto } from "../dto/update-cart.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CartFunctions extends CartVerify implements CartAbstract {

    constructor(prisma: PrismaService) {
        super(prisma);
    }

    createCart(data: CreateCartDto) {
        return this.prisma.cart.create({
            data:{
                userId: data.userId,
            }
        })
    }
    updateCart(id: string, data: UpdateCartDto) {
        return this.prisma.cart.update({
            where:{
                id,
            },
            data,
        })
    }

}