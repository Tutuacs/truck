"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionProductVerify = void 0;
class PromotionProductVerify {
    constructor(prisma) {
        this.prisma = prisma;
    }
    exPromotionProductId(id) {
        return Boolean(this.prisma.promotionProduct.findUnique({ where: { id } }));
    }
}
exports.PromotionProductVerify = PromotionProductVerify;
//# sourceMappingURL=promotion-product-exist.filter.js.map