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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_abstract_1 = require("./functions/user-abstract");
const decorators_1 = require("../decorators");
let UserService = class UserService {
    constructor(userFunctions) {
        this.userFunctions = userFunctions;
    }
    findAll() {
        return this.userFunctions.listUser();
    }
    findOne(id, user) {
        if (user.role !== decorators_1.Role.Admin && user.userId !== id) {
            throw new common_1.UnauthorizedException("You don't have permission to access this resource");
        }
        return this.userFunctions.findUser(id);
    }
    findByProfile(id, user) {
        if (user.role !== decorators_1.Role.Admin && user.id !== id) {
            throw new common_1.UnauthorizedException("You don't have permission to access this resource");
        }
        return this.userFunctions.findByProfile(id);
    }
    update(id, data, user) {
        if (user.role !== decorators_1.Role.Admin && user.userId !== id) {
            throw new common_1.UnauthorizedException("You don't have permission to access this resource");
        }
        return this.userFunctions.updateUser(id, data);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_abstract_1.UserAbstract])
], UserService);
//# sourceMappingURL=user.service.js.map