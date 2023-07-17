import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './Validation/login.dto';
import { CreateUserDto } from 'src/user/Validation/create-user.dto';
import { CreateProfileDto } from 'src/profile/Validation/create-profile.dto';

@Injectable()
export class AuthService {

  private issuer = 'truck-ecommerce-demo';
  private audience = 'profile';

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async login(login: LoginDto) {
    const user = await this.prisma.findLogin(login);
    return this.createToken(user);
  }

  async register(register: LoginDto) {
    const newRegisterP = new CreateProfileDto();
    newRegisterP.email = register.email;
    newRegisterP.password = register.password;
    return this.prisma.register(newRegisterP)
  }

  async createToken(profile: {
    id: string;
    email: string;
    userId: string;
    role: number;
  }) {
    console.log(profile);
    return {
      token: this.jwt.sign(
        {
          id: profile.id,
          role: profile.role,
          userId: profile.userId,
        },
        {
          expiresIn: '7 days',
          subject: profile.id,
          issuer: this.issuer,
          audience: this.audience,
        },
      ),
      profile: profile,
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
