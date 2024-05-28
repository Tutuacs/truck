"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionVerify = void 0;
class PromotionVerify {
    constructor(prisma) {
        this.prisma = prisma;
    }
    exPromotionId(id) {
        return Boolean(this.prisma.promotion.findUnique({ where: { id } }));
    }
}
exports.PromotionVerify = PromotionVerify;
//# sourceMappingURL=promotion-exist.filter.js.map