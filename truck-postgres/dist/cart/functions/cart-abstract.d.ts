import { Cart } from "@prisma/client";
import { CreateCartDto } from "../dto/create-cart.dto";
import { UpdateCartDto } from "../dto/update-cart.dto";
export declare abstract class CartAbstract {
    abstract createCart(data: CreateCartDto): Promise<Cart>;
    abstract updateCart(id: string, data: UpdateCartDto): Promise<Cart>;
    abstract findCartByProfile(profileId: string): Promise<Cart>;
    abstract findCartByUser(userId: string): Promise<Cart>;
    abstract findCart(id: string): Promise<Cart>;
    abstract listCart(): Promise<Cart[]>;
    abstract linkProductToCart(productId: string, cartId: string): Promise<Cart>;
    abstract unlinkProductFromCart(productId: string, cartId: string): Promise<Cart>;
    abstract linkComboToCart(comboId: string, cartId: string): Promise<Cart>;
    abstract unlinkComboFromCart(comboId: string, cartId: string): Promise<Cart>;
}
