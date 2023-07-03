import { Module, OnModuleInit } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { TruckModule } from './truck/truck.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PromotionModule } from './promotion/promotion.module';
import { BrandsModule } from './brands/brands.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { CreateUserDto } from './user/Validation/create-user.dto';
import { Role } from './decorators';
import { ModelModule } from './model/model.module';
import { CapacityModule } from './capacity/capacity.module';
import { UsertruckModule } from './usertruck/usertruck.module';
import { PromotionitemModule } from './promotionitem/promotionitem.module';
import * as bcrypt from "bcrypt";

@Module({
  imports: [
    UserModule,
    ProfileModule,
    UsertruckModule,
    TruckModule,
    ModelModule,
    CapacityModule,
    ProductModule,
    AuthModule,
    PrismaModule,
    PromotionModule,
    BrandsModule,
    ConfigModule.forRoot(),
    PromotionitemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly prisma: PrismaService) {}

  async onModuleInit() {
    const exist = await this.prisma.profile.findFirst();
    if (!exist) {
      const adminU = new CreateUserDto();
      const userId = await this.prisma.createUser(adminU);
      const salt = await bcrypt.genSalt();
      const password = await bcrypt.hash('123', salt);
      await this.prisma.profile.create({
        data: {
          email: 'admin@admin.com',
          password: password,
          role: Role.Admin,
          User: {
            connect: { id: userId.id },
          },
        },
      });
    }
  }
}