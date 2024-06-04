import { Injectable } from "@nestjs/common";
import { OrderItemsVerify } from "./order-items-exist.filter";
import { OrderItemsAbstract } from "./order-items-abstract";
import { CreateOrderItemDto, ManyOrderItemsDto } from "../dto/create-order-item.dto";
import { OrderItems } from "@prisma/client";
import { UpdateOrderItemDto } from "../dto/update-order-item.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class OrderItemsFunction extends OrderItemsVerify implements OrderItemsAbstract {

    constructor(prisma: PrismaService) {
        super(prisma)
    }

    async createOrderItem(data: CreateOrderItemDto): Promise<OrderItems> {
        return await this.prisma.orderItems.create({
            data,
        });
    }

    createManyOrderItem(data: ManyOrderItemsDto): Promise<OrderItems[]> {
        return this.prisma.orderItems.createManyAndReturn({
            data: data.items
        })
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