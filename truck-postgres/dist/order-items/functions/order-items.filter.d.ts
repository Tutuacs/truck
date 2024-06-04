import { OrderItemsVerify } from "./order-items-exist.filter";
import { OrderItemsAbstract } from "./order-items-abstract";
import { CreateOrderItemDto, ManyOrderItemsDto } from "../dto/create-order-item.dto";
import { OrderItems } from "@prisma/client";
import { UpdateOrderItemDto } from "../dto/update-order-item.dto";
import { PrismaService } from "src/prisma/prisma.service";
export declare class OrderItemsFunction extends OrderItemsVerify implements OrderItemsAbstract {
    constructor(prisma: PrismaService);
    createOrderItem(data: CreateOrderItemDto): Promise<OrderItems>;
    createManyOrderItem(data: ManyOrderItemsDto): Promise<OrderItems[]>;
    findOrderItem(id: string): Promise<OrderItems>;
    listOrderItem(id: string): Promise<OrderItems[]>;
    updateOrderItem(id: string, data: UpdateOrderItemDto): Promise<OrderItems>;
    removeOrderItem(id: string): Promise<OrderItems>;
}
