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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const update_cart_dto_1 = require("./dto/update-cart.dto");
const UserAtuh_decorator_1 = require("../decorators/UserAtuh.decorator");
const decorators_1 = require("../decorators");
const guards_1 = require("../guards");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    findAll() {
        return this.cartService.findAll();
    }
    findByProfile(id, user) {
        return this.cartService.findByProfile(id, user);
    }
    findByUser(id, user) {
        return this.cartService.findByUser(id, user);
    }
    connectionsCart(id, type, action, user) {
        return this.cartService.connectionsCart(type, action, id, user);
    }
    findOne(id, user) {
        return this.cartService.findOne(id, user);
    }
    update(id, data) {
        return this.cartService.update(id, data);
    }
};
exports.CartController = CartController;
__decorate([
    (0, decorators_1.Acess)(decorators_1.Role.Admin),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CartController.prototype, "findAll", null);
__decorate([
    (0, decorators_1.Acess)(),
    (0, common_1.Get)('profile/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, UserAtuh_decorator_1.UserAuth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "findByProfile", null);
__decorate([
    (0, decorators_1.Acess)(),
    (0, common_1.Get)('user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, UserAtuh_decorator_1.UserAuth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "findByUser", null);
__decorate([
    (0, decorators_1.Acess)(),
    (0, common_1.Get)(':action/:type/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('type')),
    __param(2, (0, common_1.Param)('action')),
    __param(3, (0, UserAtuh_decorator_1.UserAuth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "connectionsCart", null);
__decorate([
    (0, decorators_1.Acess)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, UserAtuh_decorator_1.UserAuth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "findOne", null);
__decorate([
    (0, decorators_1.Acess)(decorators_1.Role.Admin),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cart_dto_1.UpdateCartDto]),
    __metadata("design:returntype", void 0)
], CartController.prototype, "update", null);
exports.CartController = CartController = __decorate([
    (0, common_1.UseGuards)(guards_1.AuthGuard, guards_1.RoleGuard),
    (0, common_1.Controller)('cart'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
//# sourceMappingURL=cart.controller.js.map