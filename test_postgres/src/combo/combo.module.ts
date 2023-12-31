import { Module } from '@nestjs/common';
import { ComboService } from './combo.service';
import { ComboController } from './combo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [ComboController],
  providers: [ComboService]
})
export class ComboModule {}
