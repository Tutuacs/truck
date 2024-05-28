import { Order } from "@prisma/client";
import { CreateOrderDto } from "../dto/create-order.dto";
import { UpdateOrderDto } from "../dto/update-order.dto";
export declare abstract class OrderAbstract {
    abstract createOrder(data: CreateOrderDto): Promise<Order>;
    abstract findOrder(id: string): Promise<Order>;
    abstract listOrder(): Promise<Order[]>;
    abstract updateOrder(id: string, data: UpdateOrderDto): Promise<Order>;
    abstract removeOrder(id: string): Promise<Order>;
}
