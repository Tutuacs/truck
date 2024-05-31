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
exports.TruckFunctions = void 0;
const common_1 = require("@nestjs/common");
const truck_exist_filter_1 = require("./truck-exist.filter");
const prisma_service_1 = require("../../prisma/prisma.service");
let TruckFunctions = class TruckFunctions extends truck_exist_filter_1.TruckVerify {
    constructor(prisma) {
        super(prisma);
    }
    createTruck(data) {
        return this.prisma.truck.create({
            data,
        });
    }
    findTruck(id) {
        return this.prisma.truck.findUnique({
            where: {
                id,
            },
        });
    }
    listTruck() {
        return this.prisma.truck.findMany();
    }
    listByUserId(id) {
        return this.prisma.user.findFirst({
            where: {
                id,
            },
            select: {
                Trucks: true,
            },
        });
    }
    async groupTruckBrand() {
        return await this.prisma.truck.groupBy({
            by: ['brand', 'id', 'fromId'],
        });
    }
    updateTruck(id, data) {
        return this.prisma.truck.update({
            where: {
                id,
            },
            data,
        });
    }
    removeTruck(id) {
        return this.prisma.truck.delete({
            where: {
                id,
            },
        });
    }
    async linkTruck(data, user) {
        const truck = await this.prisma.user.update({
            where: {
                id: user.userId,
            },
            data: {
                Trucks: {
                    connect: data.relation,
                },
            },
            select: {
                Trucks: true,
            },
        });
        return truck.Trucks;
    }
    async unlinkTruck(data, user) {
        const truck = await this.prisma.user.update({
            where: {
                id: user.userId,
            },
            data: {
                Trucks: {
                    disconnect: data.relation,
                },
            },
            select: {
                Trucks: true,
            },
        });
        return truck.Trucks;
    }
};
exports.TruckFunctions = TruckFunctions;
exports.TruckFunctions = TruckFunctions = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TruckFunctions);
//# sourceMappingURL=truck.filter.js.map