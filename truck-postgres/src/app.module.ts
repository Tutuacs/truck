import { Module } from '@nestjs/common';
import { TruckModule } from './truck/truck.module';
import { BrandModule } from './brand/brand.module';
import { ItemModule } from './item/item.module';
import { ComboModule } from './combo/combo.module';
import { OrderModule } from './order/order.module';
import { OrderItemsModule } from './order-items/order-items.module';
import { ProductModule } from './product/product.module';
import { PromotionProductModule } from './promotion-product/promotion-product.module';
import { PromotionModule } from './promotion/promotion.module';

@Module({
  imports: [TruckModule, BrandModule, ItemModule, ComboModule, OrderModule, OrderItemsModule, ProductModule, PromotionProductModule, PromotionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
