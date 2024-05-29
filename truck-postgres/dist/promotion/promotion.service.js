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
exports.PromotionService = void 0;
const common_1 = require("@nestjs/common");
const promotion_abstract_1 = require("./functions/promotion-abstract");
let PromotionService = class PromotionService {
    constructor(promotionFunctions) {
        this.promotionFunctions = promotionFunctions;
    }
    create(data) {
        return this.promotionFunctions.createPromotion(data);
    }
    findAll() {
        return this.promotionFunctions.listPromotion();
    }
    findOne(id) {
        return this.promotionFunctions.findPromotion(id);
    }
    update(id, data) {
        return this.promotionFunctions.updatePromotion(id, data);
    }
    remove(id) {
        return this.promotionFunctions.removePromotion(id);
    }
};
exports.PromotionService = PromotionService;
exports.PromotionService = PromotionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [promotion_abstract_1.PromotionAbstract])
], PromotionService);
//# sourceMappingURL=promotion.service.js.map