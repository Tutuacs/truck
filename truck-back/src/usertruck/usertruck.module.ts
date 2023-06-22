import { Module } from '@nestjs/common';
import { UsertruckService } from './usertruck.service';
import { UsertruckController } from './usertruck.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UsertruckController],
  providers: [UsertruckService]
})
export class UsertruckModule {}
