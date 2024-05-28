"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderVerify = void 0;
class OrderVerify {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async exOrderId(id) {
        return Boolean(await this.prisma.order.count({ where: { id } }));
    }
}
exports.OrderVerify = OrderVerify;
//# sourceMappingURL=order-exist.filter.js.map