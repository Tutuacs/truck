"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFunctions = void 0;
const common_1 = require("@nestjs/common");
const order_exist_filter_1 = require("./order-exist.filter");
let OrderFunctions = class OrderFunctions extends order_exist_filter_1.OrderVerify {
    createOrder(data) {
        return this.prisma.order.create({ data });
    }
    findOrder(id) {
        return this.prisma.order.findUnique({ where: { id } });
    }
    listOrder() {
        return this.prisma.order.findMany();
    }
    updateOrder(id, data) {
        return this.prisma.order.update({ where: { id }, data });
    }
    removeOrder(id) {
        return this.prisma.order.delete({ where: { id } });
    }
};
exports.OrderFunctions = OrderFunctions;
exports.OrderFunctions = OrderFunctions = __decorate([
    (0, common_1.Injectable)()
], OrderFunctions);
//# sourceMappingURL=order.filter.js.map