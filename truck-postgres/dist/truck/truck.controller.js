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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruckController = void 0;
const common_1 = require("@nestjs/common");
const truck_service_1 = require("./truck.service");
const create_truck_dto_1 = require("./dto/create-truck.dto");
const update_truck_dto_1 = require("./dto/update-truck.dto");
const guards_1 = require("../guards");
const decorators_1 = require("../decorators");
const UserAtuh_decorator_1 = require("../decorators/UserAtuh.decorator");
const add_truck_dto_1 = require("./dto/add-truck.dto");
let TruckController = class TruckController {
    constructor(truckService) {
        this.truckService = truckService;
    }
    create(data) {
        return this.truckService.create(data);
    }
    findAll() {
        return this.truckService.findAll();
    }
    findOne(id) {
        return this.truckService.findOne(id);
    }
    listByUserId(userId, user) {
        return this.truckService.listByUserId(userId, user);
    }
    linkTruck(trucks, user) {
        return this.truckService.linkTruck(trucks, user);
    }
    unlinkTruck(trucks, user) {
        return this.truckService.unlinkTruck(trucks, user);
    }
    update(id, updateTruckDto) {
        return this.truckService.update(id, updateTruckDto);
    }
    remove(id) {
        return this.truckService.remove(id);
    }
};
exports.TruckController = TruckController;
__decorate([
    (0, decorators_1.Acess)(decorators_1.Role.Admin),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_truck_dto_1.CreateTruckDto]),
    __metadata("design:returntype", void 0)
], TruckController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TruckController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TruckController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('user-trucks/:userId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, UserAtuh_decorator_1.UserAuth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TruckController.prototype, "listByUserId", null);
__decorate([
    (0, common_1.Post)('link-truck'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, UserAtuh_decorator_1.UserAuth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_truck_dto_1.AddTruckDto, Object]),
    __metadata("design:returntype", void 0)
], TruckController.prototype, "linkTruck", null);
__decorate([
    (0, common_1.Post)('unlink-truck'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, UserAtuh_decorator_1.UserAuth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_truck_dto_1.AddTruckDto, Object]),
    __metadata("design:returntype", void 0)
], TruckController.prototype, "unlinkTruck", null);
__decorate([
    (0, decorators_1.Acess)(decorators_1.Role.Admin),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_truck_dto_1.UpdateTruckDto]),
    __metadata("design:returntype", void 0)
], TruckController.prototype, "update", null);
__decorate([
    (0, decorators_1.Acess)(decorators_1.Role.Admin),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TruckController.prototype, "remove", null);
exports.TruckController = TruckController = __decorate([
    (0, common_1.UseGuards)(guards_1.AuthGuard, guards_1.RoleGuard),
    (0, common_1.Controller)('truck'),
    __metadata("design:paramtypes", [truck_service_1.TruckService])
], TruckController);
//# sourceMappingURL=truck.controller.js.map