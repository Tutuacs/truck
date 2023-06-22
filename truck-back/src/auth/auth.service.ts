import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './Validation/login.dto';

@Injectable()
export class AuthService {

  private issuer = 'morelate-ecommerce-demo';
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
    
    // const newRegisterP = new CreateUserDto();
    // const newRegisterU = new CreateGymDto();
    // await this.prisma.existsGym(id,register.email);
    // newRegisterU.email = register.email;
    // newRegisterU.password = register.password;
    // newRegisterU.name = register.name;
    // const person = await this.prisma.createUser(newRegisterP);
    // const user = await this.prisma.createGym(newRegisterU);
    // return this.prisma.connectUtoG(user.id, person.id);
  }

  async createToken(profile: {
    id: string;
    role: number;
    email: string;
    userId: string;
  }) {
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
