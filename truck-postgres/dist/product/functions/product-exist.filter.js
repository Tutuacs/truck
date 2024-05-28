"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductVerify = void 0;
class ProductVerify {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async productExist(id) {
        return Boolean(await this.prisma.orderItems.findUnique({
            where: { id },
        }));
    }
}
exports.ProductVerify = ProductVerify;
//# sourceMappingURL=product-exist.filter.js.map