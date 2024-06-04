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
exports.ItemService = void 0;
const common_1 = require("@nestjs/common");
const item_abstract_1 = require("./functions/item-abstract");
let ItemService = class ItemService {
    constructor(itemFunctions) {
        this.itemFunctions = itemFunctions;
    }
    create(data) {
        return this.itemFunctions.createItem(data);
    }
    createMany(data) {
        return this.itemFunctions.createManyItem(data);
    }
    findAll() {
        return this.itemFunctions.listItem();
    }
    async findOne(id) {
        await this.itemFunctions.exItemId(id);
        return this.itemFunctions.findItem(id);
    }
    update(id, data) {
        return this.itemFunctions.updateItem(id, data);
    }
    remove(id) {
        return this.itemFunctions.removeItem(id);
    }
};
exports.ItemService = ItemService;
exports.ItemService = ItemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [item_abstract_1.ItemAbstract])
], ItemService);
//# sourceMappingURL=item.service.js.map