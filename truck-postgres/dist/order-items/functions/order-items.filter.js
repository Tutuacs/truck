"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemsFunction = void 0;
const common_1 = require("@nestjs/common");
const order_items_exist_filter_1 = require("./order-items-exist.filter");
const prisma_service_1 = require("../../prisma/prisma.service");
let OrderItemsFunction = class OrderItemsFunction extends order_items_exist_filter_1.OrderItemsVerify {
    constructor(prisma) {
        super(prisma);
    }
    async createOrderItem(data) {
        return await this.prisma.orderItems.create({
            data,
        });
    }
    createManyOrderItem(data) {
        return this.prisma.orderItems.createManyAndReturn({
            data: data.items
        });
    }
    async findOrderItem(id) {
        return await this.prisma.orderItems.findUnique({
            where: { id },
        });
    }
    async listOrderItem(id) {
        return await this.prisma.orderItems.findMany({
            where: { orderId: id },
        });
    }
    async updateOrderItem(id, data) {
        return await this.prisma.orderItems.update({
            where: { id },
            data,
        });
    }
    async removeOrderItem(id) {
        return await this.prisma.orderItems.delete({
            where: { id },
        });
    }
};
exports.OrderItemsFunction = OrderItemsFunction;
exports.OrderItemsFunction = OrderItemsFunction = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderItemsFunction);
//# sourceMappingURL=order-items.filter.js.map