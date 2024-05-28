"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemVerify = void 0;
class ItemVerify {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async exItemId(id) {
        return Boolean(await this.prisma.item.count({ where: { id } }));
    }
}
exports.ItemVerify = ItemVerify;
//# sourceMappingURL=item-exist.filter.js.map