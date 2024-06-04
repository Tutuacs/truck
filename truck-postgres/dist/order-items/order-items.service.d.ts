import { CreateOrderItemDto, ManyOrderItemsDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { OrderItemsAbstract } from './functions/order-items-abstract';
export declare class OrderItemsService {
    private readonly orderItemsFunction;
    constructor(orderItemsFunction: OrderItemsAbstract);
    create(data: CreateOrderItemDto): Promise<{
        id: string;
        quantity: number;
        price: number;
        active: boolean;
        productId: string;
        orderId: string;
    }>;
    createMany(data: ManyOrderItemsDto): Promise<{
        id: string;
        quantity: number;
        price: number;
        active: boolean;
        productId: string;
        orderId: string;
    }[]>;
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
