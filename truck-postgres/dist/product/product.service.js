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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_abstract_1 = require("./functions/product-abstract");
let ProductService = class ProductService {
    constructor(productFunctions) {
        this.productFunctions = productFunctions;
    }
    create(data) {
        return this.productFunctions.createProduct(data);
    }
    findAll() {
        return this.productFunctions.listProduct();
    }
    findOne(id) {
        return this.productFunctions.findProduct(id);
    }
    linkTruck(data, id) {
        return this.productFunctions.linkTruck(data, id);
    }
    linkedProducts(id) {
        return this.productFunctions.linkedProducts(id);
    }
    unlinkTruck(data, id) {
        return this.productFunctions.unlinkTruck(data, id);
    }
    linkVariation(data, id, type) {
        return this.productFunctions.linkVariation(data, id, type);
    }
    update(id, data) {
        return this.productFunctions.updateProduct(id, data);
    }
    remove(id) {
        return this.productFunctions.removeProduct(id);
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_abstract_1.ProductAbstract])
], ProductService);
//# sourceMappingURL=product.service.js.map