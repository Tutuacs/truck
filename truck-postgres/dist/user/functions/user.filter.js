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
exports.UserFunctions = void 0;
const common_1 = require("@nestjs/common");
const user_exist_filter_1 = require("./user-exist.filter");
const prisma_service_1 = require("../../prisma/prisma.service");
let UserFunctions = class UserFunctions extends user_exist_filter_1.UserVerify {
    constructor(prisma) {
        super(prisma);
    }
    createUser(data) {
        return this.prisma.user.create({ data });
    }
    findUser(id) {
        return this.prisma.user.findUnique({ where: { id } });
    }
    async findByProfile(id) {
        const p = await this.prisma.profile.findUnique({
            where: {
                id,
            },
            include: {
                User: true
            }
        });
        return p.User;
    }
    listUser() {
        return this.prisma.user.findMany();
    }
    updateUser(id, data) {
        return this.prisma.user.update({ where: { id }, data });
    }
    removeUser(id) {
        return this.prisma.user.delete({ where: { id } });
    }
};
exports.UserFunctions = UserFunctions;
exports.UserFunctions = UserFunctions = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserFunctions);
//# sourceMappingURL=user.filter.js.map