import { ConflictException, Inject, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { AuthAbstract } from './auth-abstract';
import { AuthVerify } from './auth-exist.filter';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { CreateCartDto } from 'src/cart/dto/create-cart.dto';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';

export class AuthFunctions extends AuthVerify implements AuthAbstract {

  async register(data: CreateProfileDto) {
    let verify = await this.profile.exProfileEmail(data.email);
    if (verify) {
      throw new ConflictException('Email já cadastrado');
    }
    const user = await this.user.createUser(new CreateUserDto());
    const cartDto = new CreateCartDto();
    cartDto.userId = user.id;
    await this.cart.createCart(cartDto);
    data.userId = user.id;
    return this.profile.createProfile(data);
  }

  async login(data: LoginDto) {
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
        throw new UnauthorizedException('Usuário ou senha incorretos');
      }
    } else {
      throw new UnauthorizedException('Usuário ou senha incorretos');
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
