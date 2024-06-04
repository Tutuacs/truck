import { CartService } from './cart.service';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Role } from 'src/decorators';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
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
    findByUser(id: string, user: {
        id: string;
        role: Role;
        userId: string;
    }): Promise<{
        id: string;
        userId: string;
    }>;
    connectionsCart(id: string, type: string, action: string, user: {
        cartId: string;
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
