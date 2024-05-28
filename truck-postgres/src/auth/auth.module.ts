import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { env } from 'process';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthAbstract } from './functions/auth-abstract';
import { AuthFunctions } from './functions/auth.filter';
import { ProfileFunctions } from 'src/profile/functions/profile.filter';
import { UserFunctions } from 'src/user/functions/user.filter';
import { CartFunctions } from 'src/cart/functions/cart.filter';

@Module({
  imports: [PrismaModule, JwtModule.register({ secret: env.JWT_SECRET })],
  controllers: [AuthController],
  providers: [
    AuthService,
    ProfileFunctions,
    UserFunctions,
    CartFunctions,
    AuthFunctions,
    {
      provide: AuthAbstract,
      useClass: AuthFunctions,
    },
  ],
  exports: [AuthFunctions],
})
export class AuthModule {}
