"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionFunction = void 0;
const common_1 = require("@nestjs/common");
const promotion_exist_filter_1 = require("./promotion-exist.filter");
let PromotionFunction = class PromotionFunction extends promotion_exist_filter_1.PromotionVerify {
    createPromotion(data) {
        return this.prisma.promotion.create({ data });
    }
    findPromotion(id) {
        return this.prisma.promotion.findUnique({ where: { id } });
    }
    listPromotion() {
        return this.prisma.promotion.findMany();
    }
    updatePromotion(id, data) {
        return this.prisma.promotion.update({ where: { id }, data });
    }
    removePromotion(id) {
        return this.prisma.promotion.delete({ where: { id } });
    }
};
exports.PromotionFunction = PromotionFunction;
exports.PromotionFunction = PromotionFunction = __decorate([
    (0, common_1.Injectable)()
], PromotionFunction);
//# sourceMappingURL=promotion.filter.js.map