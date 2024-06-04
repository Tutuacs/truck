import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { UserAbstract } from './functions/user-abstract';
import { UserFunctions } from './functions/user.filter';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [UserController],
  providers: [UserService,
    {
      provide: UserAbstract,
      useClass: UserFunctions,
    }
  ],
})
export class UserModule {}
