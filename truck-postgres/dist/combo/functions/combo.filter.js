"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComboFunctions = void 0;
const common_1 = require("@nestjs/common");
const combo_exist_filter_1 = require("./combo-exist.filter");
let ComboFunctions = class ComboFunctions extends combo_exist_filter_1.ComboVerify {
    createCombo(data) {
        return this.prisma.combo.create({
            data,
        });
    }
    findCombo(id) {
        return this.prisma.combo.findUnique({
            where: {
                id,
            },
        });
    }
    listCombo() {
        return this.prisma.combo.findMany();
    }
    updateCombo(id, data) {
        return this.prisma.combo.update({
            where: {
                id,
            },
            data,
        });
    }
    deleteCombo(id) {
        return this.prisma.combo.delete({
            where: {
                id,
            },
        });
    }
};
exports.ComboFunctions = ComboFunctions;
exports.ComboFunctions = ComboFunctions = __decorate([
    (0, common_1.Injectable)()
], ComboFunctions);
//# sourceMappingURL=combo.filter.js.map