import { OrderItems } from "@prisma/client";
import { CreateOrderItemDto } from "../dto/create-order-item.dto";
import { UpdateOrderItemDto } from "../dto/update-order-item.dto";

export abstract class OrderItemsAbstract {
    abstract createOrderItem(data: CreateOrderItemDto): Promise<OrderItems>;
    abstract findOrderItem(id: string): Promise<OrderItems>;
    abstract listOrderItem(id: string): Promise<OrderItems[]>;
    abstract updateOrderItem(id: string, data: UpdateOrderItemDto): Promise<OrderItems>;
    abstract removeOrderItem(id: string): Promise<OrderItems>;
}