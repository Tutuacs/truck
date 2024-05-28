import { OrderItemsVerify } from "./order-items-exist.filter";
import { OrderItemsAbstract } from "./order-items-abstract";
import { CreateOrderItemDto } from "../dto/create-order-item.dto";
import { OrderItems } from "@prisma/client";
import { UpdateOrderItemDto } from "../dto/update-order-item.dto";
export declare class OrderItemsFunction extends OrderItemsVerify implements OrderItemsAbstract {
    createOrderItem(data: CreateOrderItemDto): Promise<OrderItems>;
    findOrderItem(id: string): Promise<OrderItems>;
    listOrderItem(id: string): Promise<OrderItems[]>;
    updateOrderItem(id: string, data: UpdateOrderItemDto): Promise<OrderItems>;
    removeOrderItem(id: string): Promise<OrderItems>;
}
