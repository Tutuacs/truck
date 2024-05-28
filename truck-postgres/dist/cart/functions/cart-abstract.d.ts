import { Cart } from "@prisma/client";
import { CreateCartDto } from "../dto/create-cart.dto";
export declare abstract class CartAbstract {
    abstract createCart(data: CreateCartDto): Promise<Cart>;
    abstract updateCart(id: string, data: CreateCartDto): Promise<Cart>;
}
