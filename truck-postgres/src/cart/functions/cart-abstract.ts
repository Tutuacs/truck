import { Cart } from "@prisma/client";
import { CreateCartDto } from "../dto/create-cart.dto";

export abstract class CartAbstract {
    abstract createCart(data: CreateCartDto): Promise<Cart>;
    abstract updateCart(id: string, data: CreateCartDto): Promise<Cart>;
    // abstract deleteCart(data: CreateCartDto): Promise<Cart>;
    // abstract getCart(data: CreateCartDto): Promise<Cart>;
    // abstract getCartByUser(userId: string): Promise<Cart>;
    // abstract getCartByProduct(productId: string): Promise<Cart>;
}