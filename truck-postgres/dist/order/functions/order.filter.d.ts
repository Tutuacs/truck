import { OrderAbstract } from "./order-abstract";
import { OrderVerify } from "./order-exist.filter";
import { CreateOrderDto } from "../dto/create-order.dto";
import { Order } from "@prisma/client";
export declare class OrderFunctions extends OrderVerify implements OrderAbstract {
    createOrder(data: CreateOrderDto): Promise<Order>;
    findOrder(id: string): Promise<Order>;
    listOrder(): Promise<Order[]>;
    updateOrder(id: string, data: CreateOrderDto): Promise<Order>;
    removeOrder(id: string): Promise<Order>;
}
