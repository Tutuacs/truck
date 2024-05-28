"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthFunctions = void 0;
const common_1 = require("@nestjs/common");
const auth_exist_filter_1 = require("./auth-exist.filter");
const bcrypt = require("bcrypt");
const create_user_dto_1 = require("../../user/dto/create-user.dto");
const create_cart_dto_1 = require("../../cart/dto/create-cart.dto");
class AuthFunctions extends auth_exist_filter_1.AuthVerify {
    async register(data) {
        let verify = await this.profile.exProfileEmail(data.email);
        if (verify) {
            throw new common_1.ConflictException('Email já cadastrado');
        }
        const user = await this.user.createUser(new create_user_dto_1.CreateUserDto());
        const cartDto = new create_cart_dto_1.CreateCartDto();
        cartDto.userId = user.id;
        await this.cart.createCart(cartDto);
        data.userId = user.id;
        return this.profile.createProfile(data);
    }
    async login(data) {
        const user = await this.prisma.profile.findUnique({
            where: {
                email: data.email,
            },
            select: {
                id: true,
                userId: true,
                role: true,
                email: true,
                password: true,
                User: {
                    select: {
                        Cart: {
                            select: {
                                id: true,
                            }
                        }
                    },
                }
            },
        });
        if (user) {
            if (!(await bcrypt.compare(data.password, user.password))) {
                throw new common_1.UnauthorizedException('Usuário ou senha incorretos');
            }
        }
        else {
            throw new common_1.UnauthorizedException('Usuário ou senha incorretos');
        }
        return {
            id: user.id,
            userId: user.userId,
            cartId: user.User.Cart.id,
            email: user.email,
            role: user.role,
        };
    }
}
exports.AuthFunctions = AuthFunctions;
//# sourceMappingURL=auth.filter.js.map