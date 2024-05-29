import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthFunctions } from './functions/auth.filter';
import { JwtService } from '@nestjs/jwt';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';
import { AuthAbstract } from './functions/auth-abstract';

@Injectable()
export class AuthService {
  private issuer = 'truck-ecommerce-demo';
  private audience = 'profile';

  constructor(
    private readonly authFunctions: AuthAbstract,
    private readonly jwt: JwtService,
  ) {}

  async findProfile(id: string) {
    return this.authFunctions.findProfile(id);
  }

  async login(login: LoginDto) {
    const user = await this.authFunctions.login(login);
    return this.createToken(user);
  }

  async register(register: LoginDto) {
    const newRegisterP = new CreateProfileDto();
    newRegisterP.email = register.email;
    newRegisterP.password = register.password;
    return this.authFunctions.register(newRegisterP)
  }

  async createToken(profile: {
    id: string;
    userId: string;
    cartId: string;
    email: string;
    role: number;
  }) {
    return {
      token: this.jwt.sign(
        {
          id: profile.id,
          userId: profile.userId,
          cartId: profile.cartId,
          email: profile.email,
          role: profile.role,
        },
        {
          expiresIn: '7 days',
          subject: profile.id,
          issuer: this.issuer,
          audience: this.audience,
        },
      ),
      profile,
    };
  }

  async checkToken(token: string) {
    try {
      const data = this.jwt.verify(token, {
        audience: this.audience,
        issuer: this.issuer,
      });
      return data;
    } catch (e) {
      throw new UnauthorizedException('O token não foi identificado');
    }
  }

  validToken(token: string) {
    try {
      this.checkToken(token);
      return true;
    } catch (error) {
      return false;
    }
  }
}
