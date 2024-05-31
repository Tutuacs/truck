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
exports.ProductFunction = void 0;
const product_exist_filter_1 = require("./product-exist.filter");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ProductFunction = class ProductFunction extends product_exist_filter_1.ProductVerify {
    constructor(prisma) {
        super(prisma);
    }
    createProduct(data) {
        return this.prisma.product.create({ data });
    }
    findProduct(id) {
        return this.prisma.product.findUnique({ where: { id } });
    }
    listProduct() {
        return this.prisma.product.findMany({
            include: {
                Truck: {
                    select: {
                        id: true,
                    },
                },
            },
        });
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
                    connect: data.relation,
                },
            },
            select: {
                Truck: true,
            },
        });
        return product.Truck;
    }
    async linkedProducts(id) {
        return this.prisma.product.findUnique({
            where: {
                id,
            },
            include: {
                RelatedWith: true,
            },
        });
    }
    async linkVariation(data, id, type) {
        if (type.toLowerCase() === 'connect') {
            return this.prisma.product.update({
                where: {
                    id,
                },
                data: {
                    RelationWith: {
                        connect: data.relation,
                    },
                },
                include: {
                    RelationWith: true,
                },
            });
        }
        else if (type.toLowerCase() === 'disconnect') {
            return this.prisma.product.update({
                where: {
                    id,
                },
                data: {
                    RelationWith: {
                        disconnect: data.relation,
                    },
                },
                include: {
                    RelationWith: true,
                },
            });
        }
        else {
            console.log(`Invalid type: ${type}`);
            throw new common_1.NotImplementedException("Type not implemented: " + type);
        }
    }
    async unlinkTruck(data, id) {
        const product = await this.prisma.product.update({
            where: {
                id,
            },
            data: {
                Truck: {
                    disconnect: data.relation,
                },
            },
            select: {
                Truck: true,
            },
        });
        return product.Truck;
    }
};
exports.ProductFunction = ProductFunction;
exports.ProductFunction = ProductFunction = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductFunction);
//# sourceMappingURL=product.filter.js.map