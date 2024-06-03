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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionProductController = void 0;
const common_1 = require("@nestjs/common");
const promotion_product_service_1 = require("./promotion-product.service");
const create_promotion_product_dto_1 = require("./dto/create-promotion-product.dto");
const update_promotion_product_dto_1 = require("./dto/update-promotion-product.dto");
let PromotionProductController = class PromotionProductController {
    constructor(promotionProductService) {
        this.promotionProductService = promotionProductService;
    }
    create(createPromotionProductDto) {
        return this.promotionProductService.create(createPromotionProductDto);
    }
    findAll() {
        return this.promotionProductService.findAll();
    }
    findAllByPromotion(id) {
        return this.promotionProductService.findAllByPromotion(id);
    }
    findOne(id) {
        return this.promotionProductService.findOne(id);
    }
    update(id, updatePromotionProductDto) {
        return this.promotionProductService.update(id, updatePromotionProductDto);
    }
    remove(id) {
        return this.promotionProductService.remove(id);
    }
};
exports.PromotionProductController = PromotionProductController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_promotion_product_dto_1.CreatePromotionProductDto]),
    __metadata("design:returntype", void 0)
], PromotionProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PromotionProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('promotion/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PromotionProductController.prototype, "findAllByPromotion", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PromotionProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_promotion_product_dto_1.UpdatePromotionProductDto]),
    __metadata("design:returntype", void 0)
], PromotionProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PromotionProductController.prototype, "remove", null);
exports.PromotionProductController = PromotionProductController = __decorate([
    (0, common_1.Controller)('promotion-product'),
    __metadata("design:paramtypes", [promotion_product_service_1.PromotionProductService])
], PromotionProductController);
//# sourceMappingURL=promotion-product.controller.js.map