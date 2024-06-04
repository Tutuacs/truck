import { OrderItems } from "@prisma/client";
import { CreateOrderItemDto, ManyOrderItemsDto } from "../dto/create-order-item.dto";
import { UpdateOrderItemDto } from "../dto/update-order-item.dto";
export declare abstract class OrderItemsAbstract {
    abstract createOrderItem(data: CreateOrderItemDto): Promise<OrderItems>;
    abstract createManyOrderItem(data: ManyOrderItemsDto): Promise<OrderItems[]>;
    abstract findOrderItem(id: string): Promise<OrderItems>;
    abstract listOrderItem(id: string): Promise<OrderItems[]>;
    abstract updateOrderItem(id: string, data: UpdateOrderItemDto): Promise<OrderItems>;
    abstract removeOrderItem(id: string): Promise<OrderItems>;
}
