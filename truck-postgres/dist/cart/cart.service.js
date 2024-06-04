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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("../decorators");
const cart_abstract_1 = require("./functions/cart-abstract");
let CartService = class CartService {
    constructor(cartFunctions) {
        this.cartFunctions = cartFunctions;
    }
    findAll() {
        return this.cartFunctions.listCart();
    }
    findByProfile(id, user) {
        if (user.role !== decorators_1.Role.Admin && user.id !== id) {
            throw new common_1.UnauthorizedException("You don't have permission to access this resource");
        }
        return this.cartFunctions.findCartByProfile(id);
    }
    connectionsCart(type, action, id, user) {
        if (type.toLocaleLowerCase() === 'combo') {
            if (action.toLocaleLowerCase() === 'add') {
                return this.cartFunctions.linkComboToCart(id, user.cartId);
            }
            else if (action.toLocaleLowerCase() === 'remove') {
                return this.cartFunctions.unlinkComboFromCart(id, user.cartId);
            }
        }
        else if (type.toLocaleLowerCase() === 'product') {
            if (action.toLocaleLowerCase() === 'add') {
                return this.cartFunctions.linkProductToCart(id, user.cartId);
            }
            else if (action.toLocaleLowerCase() === 'remove') {
                return this.cartFunctions.unlinkProductFromCart(id, user.cartId);
            }
        }
        return this.cartFunctions.findCartByProfile(id);
    }
    findByUser(id, user) {
        if (user.role !== decorators_1.Role.Admin && user.userId !== id) {
            throw new common_1.UnauthorizedException("You don't have permission to access this resource");
        }
        return this.cartFunctions.findCartByUser(id);
    }
    findOne(id, user) {
        if (user.role !== decorators_1.Role.Admin && user.id !== id) {
            throw new common_1.UnauthorizedException("You don't have permission to access this resource");
        }
        return this.cartFunctions.findCart(id);
    }
    update(id, data) {
        return this.cartFunctions.updateCart(id, data);
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cart_abstract_1.CartAbstract])
], CartService);
//# sourceMappingURL=cart.service.js.map