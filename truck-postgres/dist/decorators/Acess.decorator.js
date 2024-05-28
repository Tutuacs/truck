"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acess = exports.ACESS_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.ACESS_KEY = 'roles';
const Acess = (...role) => (0, common_1.SetMetadata)(exports.ACESS_KEY, role);
exports.Acess = Acess;
//# sourceMappingURL=Acess.decorator.js.map