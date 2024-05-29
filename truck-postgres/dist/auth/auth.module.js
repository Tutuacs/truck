"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const jwt_1 = require("@nestjs/jwt");
const process_1 = require("process");
const prisma_module_1 = require("../prisma/prisma.module");
const auth_abstract_1 = require("./functions/auth-abstract");
const auth_filter_1 = require("./functions/auth.filter");
const user_filter_1 = require("../user/functions/user.filter");
const cart_filter_1 = require("../cart/functions/cart.filter");
const profile_filter_1 = require("../profile/functions/profile.filter");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, jwt_1.JwtModule.register({ secret: process_1.env.JWT_SECRET })],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            profile_filter_1.ProfileFunctions,
            user_filter_1.UserFunctions,
            cart_filter_1.CartFunctions,
            auth_filter_1.AuthFunctions,
            {
                provide: auth_abstract_1.AuthAbstract,
                useClass: auth_filter_1.AuthFunctions,
            },
        ],
        exports: [auth_service_1.AuthService, auth_filter_1.AuthFunctions],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map