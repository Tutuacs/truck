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
exports.PromotionProductFunctions = void 0;
const common_1 = require("@nestjs/common");
const promotion_product_exist_filter_1 = require("./promotion-product-exist.filter");
const prisma_service_1 = require("../../prisma/prisma.service");
let PromotionProductFunctions = class PromotionProductFunctions extends promotion_product_exist_filter_1.PromotionProductVerify {
    constructor(prisma) {
        super(prisma);
    }
    createPromotionProduct(data) {
        return this.prisma.promotionProduct.createManyAndReturn({
            data: data.promotionProducts
        });
    }
    findPromotionProduct(id) {
        return this.prisma.promotionProduct.findUnique({ where: { id } });
    }
    listPromotionProduct() {
        return this.prisma.promotionProduct.findMany();
    }
    listByPromotion(promotionId) {
        return this.prisma.promotionProduct.findMany({
            where: {
                promotionId,
            }
        });
    }
    updatePromotionProduct(id, data) {
        return this.prisma.promotionProduct.update({ where: { id }, data });
    }
    removePromotionProduct(id) {
        return this.prisma.promotionProduct.delete({ where: { id } });
    }
};
exports.PromotionProductFunctions = PromotionProductFunctions;
exports.PromotionProductFunctions = PromotionProductFunctions = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PromotionProductFunctions);
//# sourceMappingURL=promotion-product.filter.js.map