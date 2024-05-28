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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const truck_module_1 = require("./truck/truck.module");
const brand_module_1 = require("./brand/brand.module");
const item_module_1 = require("./item/item.module");
const combo_module_1 = require("./combo/combo.module");
const order_module_1 = require("./order/order.module");
const order_items_module_1 = require("./order-items/order-items.module");
const product_module_1 = require("./product/product.module");
const promotion_product_module_1 = require("./promotion-product/promotion-product.module");
const promotion_module_1 = require("./promotion/promotion.module");
const cart_module_1 = require("./cart/cart.module");
const user_module_1 = require("./user/user.module");
const profile_module_1 = require("./profile/profile.module");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const decorators_1 = require("./decorators");
const auth_filter_1 = require("./auth/functions/auth.filter");
const prisma_service_1 = require("./prisma/prisma.service");
const create_profile_dto_1 = require("./profile/dto/create-profile.dto");
const bcrypt = require("bcrypt");
const user_filter_1 = require("./user/functions/user.filter");
const cart_filter_1 = require("./cart/functions/cart.filter");
const profile_filter_1 = require("./profile/functions/profile.filter");
let AppModule = class AppModule {
    constructor(auth, prisma) {
        this.auth = auth;
        this.prisma = prisma;
    }
    async onModuleInit() {
        const exist = await this.prisma.profile.findFirst();
        if (!exist) {
            const adminU = new create_profile_dto_1.CreateProfileDto();
            adminU.email = 'admin@admin.com';
            const salt = await bcrypt.genSalt();
            adminU.password = await bcrypt.hash('123', salt);
            const profile = await this.auth.register(adminU);
            await this.prisma.profile.update({
                where: {
                    id: profile.id,
                },
                data: {
                    role: decorators_1.Role.Admin,
                },
            });
        }
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            truck_module_1.TruckModule,
            brand_module_1.BrandModule,
            item_module_1.ItemModule,
            combo_module_1.ComboModule,
            order_module_1.OrderModule,
            order_items_module_1.OrderItemsModule,
            product_module_1.ProductModule,
            promotion_product_module_1.PromotionProductModule,
            promotion_module_1.PromotionModule,
            cart_module_1.CartModule,
            user_module_1.UserModule,
            profile_module_1.ProfileModule,
            auth_module_1.AuthModule,
        ],
        controllers: [],
        providers: [
            prisma_service_1.PrismaService,
            auth_filter_1.AuthFunctions,
            profile_filter_1.ProfileFunctions,
            user_filter_1.UserFunctions,
            cart_filter_1.CartFunctions,
        ],
    }),
    __metadata("design:paramtypes", [auth_filter_1.AuthFunctions,
        prisma_service_1.PrismaService])
], AppModule);
//# sourceMappingURL=app.module.js.map