"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionProductModule = void 0;
const common_1 = require("@nestjs/common");
const promotion_product_service_1 = require("./promotion-product.service");
const promotion_product_controller_1 = require("./promotion-product.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const auth_module_1 = require("../auth/auth.module");
const promotion_product_abstract_1 = require("./functions/promotion-product-abstract");
const promotion_product_filter_1 = require("./functions/promotion-product.filter");
let PromotionProductModule = class PromotionProductModule {
};
exports.PromotionProductModule = PromotionProductModule;
exports.PromotionProductModule = PromotionProductModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, auth_module_1.AuthModule],
        controllers: [promotion_product_controller_1.PromotionProductController],
        providers: [promotion_product_service_1.PromotionProductService,
            {
                provide: promotion_product_abstract_1.PromotionProductAbstract,
                useClass: promotion_product_filter_1.PromotionProductFunctions,
            }],
    })
], PromotionProductModule);
//# sourceMappingURL=promotion-product.module.js.map