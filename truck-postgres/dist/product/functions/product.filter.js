"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFunction = void 0;
const product_exist_filter_1 = require("./product-exist.filter");
const common_1 = require("@nestjs/common");
let ProductFunction = class ProductFunction extends product_exist_filter_1.ProductVerify {
    createProduct(data) {
        return this.prisma.product.create({ data });
    }
    findProduct(id) {
        return this.prisma.product.findUnique({ where: { id } });
    }
    listProduct() {
        return this.prisma.product.findMany();
    }
    updateProduct(id, data) {
        return this.prisma.product.update({ where: { id }, data });
    }
    removeProduct(id) {
        return this.prisma.product.delete({ where: { id } });
    }
    async linkTruck(data, id) {
        const product = await this.prisma.product.update({
            where: {
                id,
            },
            data: {
                Truck: {
                    connect: data.trucks,
                },
            },
            select: {
                Truck: true
            }
        });
        return product.Truck;
    }
    async unlinkTruck(data, id) {
        const product = await this.prisma.product.update({
            where: {
                id,
            },
            data: {
                Truck: {
                    disconnect: data.trucks
                },
            },
            select: {
                Truck: true
            }
        });
        return product.Truck;
    }
};
exports.ProductFunction = ProductFunction;
exports.ProductFunction = ProductFunction = __decorate([
    (0, common_1.Injectable)()
], ProductFunction);
//# sourceMappingURL=product.filter.js.map