import { Module } from '@nestjs/common';
import { PromotionProductService } from './promotion-product.service';
import { PromotionProductController } from './promotion-product.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { PromotionProductAbstract } from './functions/promotion-product-abstract';
import { PromotionProductFunctions } from './functions/promotion-product.filter';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [PromotionProductController],
  providers: [PromotionProductService, 
    {
      provide: PromotionProductAbstract,
      useClass: PromotionProductFunctions,
  }],
})
export class PromotionProductModule {}
