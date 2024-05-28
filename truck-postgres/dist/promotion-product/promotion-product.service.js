"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionProductService = void 0;
const common_1 = require("@nestjs/common");
let PromotionProductService = class PromotionProductService {
    create(createPromotionProductDto) {
        return 'This action adds a new promotionProduct';
    }
    findAll() {
        return `This action returns all promotionProduct`;
    }
    findOne(id) {
        return `This action returns a #${id} promotionProduct`;
    }
    update(id, updatePromotionProductDto) {
        return `This action updates a #${id} promotionProduct`;
    }
    remove(id) {
        return `This action removes a #${id} promotionProduct`;
    }
};
exports.PromotionProductService = PromotionProductService;
exports.PromotionProductService = PromotionProductService = __decorate([
    (0, common_1.Injectable)()
], PromotionProductService);
//# sourceMappingURL=promotion-product.service.js.map