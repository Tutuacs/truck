import { Injectable } from "@nestjs/common";
import { OrderItemsVerify } from "./order-items-exist.filter";
import { OrderItemsAbstract } from "./order-items-abstract";
import { CreateOrderItemDto } from "../dto/create-order-item.dto";
import { OrderItems } from "@prisma/client";
import { UpdateOrderItemDto } from "../dto/update-order-item.dto";

@Injectable()
export class OrderItemsFunction extends OrderItemsVerify implements OrderItemsAbstract {
    async createOrderItem(data: CreateOrderItemDto): Promise<OrderItems> {
        return await this.prisma.orderItems.create({
            data,
        });
    }

    async findOrderItem(id: string): Promise<OrderItems> {
        return await this.prisma.orderItems.findUnique({
            where: { id },
        });
    }

    async listOrderItem(id: string): Promise<OrderItems[]> {
        return await this.prisma.orderItems.findMany({
            where: { orderId: id },
        });
    }

    async updateOrderItem(id: string, data: UpdateOrderItemDto): Promise<OrderItems> {
        return await this.prisma.orderItems.update({
            where: { id },
            data,
        });
    }

    async removeOrderItem(id: string): Promise<OrderItems> {
        return await this.prisma.orderItems.delete({
            where: { id },
        });
    }
}