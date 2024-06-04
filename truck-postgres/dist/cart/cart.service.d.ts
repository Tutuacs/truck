import { UpdateCartDto } from './dto/update-cart.dto';
import { Role } from 'src/decorators';
import { CartAbstract } from './functions/cart-abstract';
export declare class CartService {
    private readonly cartFunctions;
    constructor(cartFunctions: CartAbstract);
    findAll(): Promise<{
        id: string;
        userId: string;
    }[]>;
    findByProfile(id: string, user: {
        id: string;
        role: Role;
    }): Promise<{
        id: string;
        userId: string;
    }>;
    connectionsCart(type: string, action: string, id: string, user: {
        cartId: string;
    }): Promise<{
        id: string;
        userId: string;
    }>;
    findByUser(id: string, user: {
        id: string;
        role: Role;
        userId: string;
    }): Promise<{
        id: string;
        userId: string;
    }>;
    findOne(id: string, user: {
        id: string;
        role: Role;
    }): Promise<{
        id: string;
        userId: string;
    }>;
    update(id: string, data: UpdateCartDto): Promise<{
        id: string;
        userId: string;
    }>;
}
