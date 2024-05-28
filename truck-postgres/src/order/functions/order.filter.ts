import { Injectable } from "@nestjs/common";
import { OrderAbstract } from "./order-abstract";
import { OrderVerify } from "./order-exist.filter";
import { CreateOrderDto } from "../dto/create-order.dto";
import { Order } from "@prisma/client";

@Injectable()
export class OrderFunctions extends OrderVerify implements OrderAbstract {
 
    createOrder(data: CreateOrderDto): Promise<Order> {
        return this.prisma.order.create({ data });
    }

    findOrder(id: string): Promise<Order> {
        return this.prisma.order.findUnique({ where: { id } });
    }

    listOrder(): Promise<Order[]> {
        return this.prisma.order.findMany();
    }

    updateOrder(id: string, data: CreateOrderDto): Promise<Order> {
        return this.prisma.order.update({ where: { id }, data });
    }

    removeOrder(id: string): Promise<Order> {
        return this.prisma.order.delete({ where: { id } });
    }
}