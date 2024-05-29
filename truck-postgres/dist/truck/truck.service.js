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
exports.TruckService = void 0;
const common_1 = require("@nestjs/common");
const truck_abstract_1 = require("./functions/truck-abstract");
const decorators_1 = require("../decorators");
let TruckService = class TruckService {
    constructor(truckFunctions) {
        this.truckFunctions = truckFunctions;
    }
    create(data) {
        return this.truckFunctions.createTruck(data);
    }
    findAll() {
        return this.truckFunctions.listTruck();
    }
    findOne(id) {
        return this.truckFunctions.listTruck();
    }
    listByUserId(id, user) {
        if (user.role != decorators_1.Role.Admin && user.id != id) {
            throw new common_1.UnauthorizedException("Seu usuário não pode visualizar os caminhões de outro usuário.");
        }
        return this.truckFunctions.listByUserId(id);
    }
    linkTruck(data, user) {
        return this.truckFunctions.linkTruck(data, user);
    }
    unlinkTruck(data, user) {
        return this.truckFunctions.unlinkTruck(data, user);
    }
    update(id, data) {
        return this.truckFunctions.updateTruck(id, data);
    }
    remove(id) {
        return this.truckFunctions.removeTruck(id);
    }
};
exports.TruckService = TruckService;
exports.TruckService = TruckService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [truck_abstract_1.TruckAbstract])
], TruckService);
//# sourceMappingURL=truck.service.js.map