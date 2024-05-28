"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandFunctions = void 0;
const common_1 = require("@nestjs/common");
const brand_exist_filter_1 = require("./brand-exist.filter");
let BrandFunctions = class BrandFunctions extends brand_exist_filter_1.BrandVerify {
    createBrand(data) {
        return this.prisma.brands.create({ data });
    }
    findBrand(id) {
        return this.prisma.brands.findUnique({ where: { id } });
    }
    listBrand() {
        return this.prisma.brands.findMany();
    }
    updateBrand(id, data) {
        return this.prisma.brands.update({ where: { id }, data });
    }
    removeBrand(id) {
        return this.prisma.brands.delete({ where: { id } });
    }
};
exports.BrandFunctions = BrandFunctions;
exports.BrandFunctions = BrandFunctions = __decorate([
    (0, common_1.Injectable)()
], BrandFunctions);
//# sourceMappingURL=brand.filter.js.map