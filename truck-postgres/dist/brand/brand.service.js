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
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
const brand_abstract_1 = require("./functions/brand-abstract");
let BrandService = class BrandService {
    constructor(brandFunctions) {
        this.brandFunctions = brandFunctions;
    }
    create(data) {
        return this.brandFunctions.createBrand(data);
    }
    findAll() {
        return this.brandFunctions.listBrand();
    }
    findOne(id) {
        return this.brandFunctions.findBrand(id);
    }
    update(id, data) {
        return this.brandFunctions.updateBrand(id, data);
    }
    remove(id) {
        return this.brandFunctions.removeBrand(id);
    }
};
exports.BrandService = BrandService;
exports.BrandService = BrandService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [brand_abstract_1.BrandAbstract])
], BrandService);
//# sourceMappingURL=brand.service.js.map