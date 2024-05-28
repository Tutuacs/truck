"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemsVerify = void 0;
class OrderItemsVerify {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async orderItemExist(id) {
        return Boolean(await this.prisma.orderItems.findUnique({
            where: { id },
        }));
    }
}
exports.OrderItemsVerify = OrderItemsVerify;
//# sourceMappingURL=order-items-exist.filter.js.map