import { OrderItemsService } from './order-items.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
export declare class OrderItemsController {
    private readonly orderItemsService;
    constructor(orderItemsService: OrderItemsService);
    create(data: CreateOrderItemDto): Promise<{
        id: string;
        quantity: number;
        price: number;
        active: boolean;
        productId: string;
        orderId: string;
    }>;
    findAll(): string;
    findOne(id: string): Promise<{
        id: string;
        quantity: number;
        price: number;
        active: boolean;
        productId: string;
        orderId: string;
    }>;
    update(id: string, data: UpdateOrderItemDto): Promise<{
        id: string;
        quantity: number;
        price: number;
        active: boolean;
        productId: string;
        orderId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        quantity: number;
        price: number;
        active: boolean;
        productId: string;
        orderId: string;
    }>;
}