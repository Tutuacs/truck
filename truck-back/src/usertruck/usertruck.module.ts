import { Module } from '@nestjs/common';
import { UsertruckService } from './usertruck.service';
import { UsertruckController } from './usertruck.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [UsertruckController],
  providers: [UsertruckService]
})
export class UsertruckModule {}
