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

@Module({
  imports: [
    UserModule,
    ProfileModule,
    TruckModule,
    ProductModule,
    AuthModule,
    PrismaModule,
    PromotionModule,
    BrandsModule,
    ConfigModule.forRoot(),
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
      const adminId = await this.prisma.profile.create({
        data: {
          email: 'admin@admin.com',
          password: '123',
          role: Role.Admin,
          User: {
            connect: { id: userId.id },
          },
        },
      });
    }
  }
}
