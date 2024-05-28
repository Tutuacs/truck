"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComboModule = void 0;
const common_1 = require("@nestjs/common");
const combo_service_1 = require("./combo.service");
const combo_controller_1 = require("./combo.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const combo_filter_1 = require("./functions/combo.filter");
const combo_abstract_1 = require("./functions/combo-abstract");
let ComboModule = class ComboModule {
};
exports.ComboModule = ComboModule;
exports.ComboModule = ComboModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [combo_controller_1.ComboController],
        providers: [
            combo_service_1.ComboService,
            {
                provide: combo_abstract_1.ComboAbstract,
                useClass: combo_filter_1.ComboFunctions,
            },
        ],
    })
], ComboModule);
//# sourceMappingURL=combo.module.js.map