import { Module } from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { PromotionController } from './promotion.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { PromotionAbstract } from './functions/promotion-abstract';
import { PromotionFunction } from './functions/promotion.filter';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [PromotionController],
  providers: [PromotionService, {
    provide: PromotionAbstract,
    useClass: PromotionFunction,
  }],
})
export class PromotionModule {}
