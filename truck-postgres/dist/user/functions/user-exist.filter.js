"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserVerify = void 0;
class UserVerify {
    constructor(prisma) {
        this.prisma = prisma;
    }
    exUserId(id) {
        return Boolean(this.prisma.user.count({ where: { id } }));
    }
    exUserEmail(email) {
        return Boolean(this.prisma.user.count({ where: { email } }));
    }
    exUserDocument(document) {
        return Boolean(this.prisma.user.count({ where: { document } }));
    }
}
exports.UserVerify = UserVerify;
//# sourceMappingURL=user-exist.filter.js.map