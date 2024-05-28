"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruckVerify = void 0;
class TruckVerify {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async exTruckId(id) {
        return Boolean(await this.prisma.truck.count({ where: { id } }));
    }
    async exTruckName(name) {
        return Boolean(await this.prisma.truck.count({ where: { name } }));
    }
}
exports.TruckVerify = TruckVerify;
//# sourceMappingURL=truck-exist.filter.js.map