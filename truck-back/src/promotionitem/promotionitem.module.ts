import { Module } from '@nestjs/common';
import { PromotionitemService } from './promotionitem.service';
import { PromotionitemController } from './promotionitem.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [PromotionitemController],
  providers: [PromotionitemService]
})
export class PromotionitemModule {}
