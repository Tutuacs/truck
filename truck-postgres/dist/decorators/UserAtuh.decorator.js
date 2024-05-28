"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuth = void 0;
const common_1 = require("@nestjs/common");
exports.UserAuth = (0, common_1.createParamDecorator)((filterData, context) => {
    const request = context.switchToHttp().getRequest();
    if (request.token) {
        if (filterData) {
            return request.token[filterData];
        }
        else {
            return request.token;
        }
    }
    else {
        throw new common_1.ForbiddenException('Usuário logado não encontrado no banco de dados, Use o AuthGuard para obter o usuário');
    }
});
//# sourceMappingURL=UserAtuh.decorator.js.map