import { Module, OnModuleInit } from '@nestjs/common';
import { TruckModule } from './truck/truck.module';
import { BrandModule } from './brand/brand.module';
import { ItemModule } from './item/item.module';
import { ComboModule } from './combo/combo.module';
import { OrderModule } from './order/order.module';
import { OrderItemsModule } from './order-items/order-items.module';
import { ProductModule } from './product/product.module';
import { PromotionProductModule } from './promotion-product/promotion-product.module';
import { PromotionModule } from './promotion/promotion.module';
import { CartModule } from './cart/cart.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { Role } from './decorators';
import { AuthFunctions } from './auth/functions/auth.filter';
import { PrismaService } from './prisma/prisma.service';
import { CreateProfileDto } from './profile/dto/create-profile.dto';
import * as bcrypt from 'bcrypt';
import { UserFunctions } from './user/functions/user.filter';
import { CartFunctions } from './cart/functions/cart.filter';
import { ProfileFunctions } from './profile/functions/profile.filter';
import { ProfileVerify } from './profile/functions/profile-exist.filter';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TruckModule,
    BrandModule,
    ItemModule,
    ComboModule,
    OrderModule,
    OrderItemsModule,
    ProductModule,
    PromotionProductModule,
    PromotionModule,
    CartModule,
    UserModule,
    ProfileModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    PrismaService,
    AuthFunctions,
    ProfileFunctions,
    UserFunctions,
    CartFunctions,
  ],
})
export class AppModule implements OnModuleInit {
  constructor(
    private readonly auth: AuthFunctions,
    private readonly prisma: PrismaService,
  ) {}

  async onModuleInit() {
    const exist = await this.prisma.profile.findFirst();
    if (!exist) {
      const adminU = new CreateProfileDto();
      adminU.email = 'admin@admin.com';
      const salt = await bcrypt.genSalt();
      adminU.password = await bcrypt.hash('123', salt);
      const profile = await this.auth.register(adminU);
      await this.prisma.profile.update({
        where: {
          id: profile.id,
        },
        data: {
          role: Role.Admin,
        },
      });
    }
  }
}
