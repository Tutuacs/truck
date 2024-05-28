"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemModule = void 0;
const common_1 = require("@nestjs/common");
const item_service_1 = require("./item.service");
const item_controller_1 = require("./item.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const prisma_service_1 = require("../prisma/prisma.service");
const item_abstract_1 = require("./functions/item-abstract");
const item_filter_1 = require("./functions/item.filter");
let ItemModule = class ItemModule {
};
exports.ItemModule = ItemModule;
exports.ItemModule = ItemModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [item_controller_1.ItemController],
        providers: [
            item_service_1.ItemService,
            prisma_service_1.PrismaService,
            {
                provide: item_abstract_1.ItemAbstract,
                useClass: item_filter_1.ItemFunctions,
            },
        ],
    })
], ItemModule);
//# sourceMappingURL=item.module.js.map