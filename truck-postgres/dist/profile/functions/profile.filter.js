"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileFunctions = void 0;
const common_1 = require("@nestjs/common");
const profile_exist_filter_1 = require("./profile-exist.filter");
let ProfileFunctions = class ProfileFunctions extends profile_exist_filter_1.ProfileVerify {
    createProfile(data) {
        return this.prisma.profile.create({ data });
    }
    findProfile(id) {
        return this.prisma.profile.findUnique({ where: { id } });
    }
    listProfile() {
        return this.prisma.profile.findMany();
    }
    updateProfile(id, data) {
        return this.prisma.profile.update({ where: { id }, data });
    }
    removeProfile(id) {
        return this.prisma.profile.delete({ where: { id } });
    }
    async exProfileEmail(email) {
        return Boolean(await this.prisma.profile.count({ where: { email } }));
    }
};
exports.ProfileFunctions = ProfileFunctions;
exports.ProfileFunctions = ProfileFunctions = __decorate([
    (0, common_1.Injectable)()
], ProfileFunctions);
//# sourceMappingURL=profile.filter.js.map