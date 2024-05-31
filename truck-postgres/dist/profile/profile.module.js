"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileModule = void 0;
const common_1 = require("@nestjs/common");
const profile_service_1 = require("./profile.service");
const profile_controller_1 = require("./profile.controller");
const auth_module_1 = require("../auth/auth.module");
const profile_abstract_1 = require("./functions/profile-abstract");
const profile_filter_1 = require("./functions/profile.filter");
const prisma_module_1 = require("../prisma/prisma.module");
let ProfileModule = class ProfileModule {
};
exports.ProfileModule = ProfileModule;
exports.ProfileModule = ProfileModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, prisma_module_1.PrismaModule],
        controllers: [profile_controller_1.ProfileController],
        providers: [profile_service_1.ProfileService,
            {
                provide: profile_abstract_1.ProfileAbstract,
                useClass: profile_filter_1.ProfileFunctions,
            }
        ],
    })
], ProfileModule);
//# sourceMappingURL=profile.module.js.map