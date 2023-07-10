import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { PrismaService } from './prisma/prisma.service';
import { Role } from './decorators';
import { CreateUserDto } from './user/Validation/create-user.dto';
import { TruckModule } from './truck/truck.module';
import { ProductModule } from './product/product.module';
import { BrandsModule } from './brands/brands.module';
import { ComboModule } from './combo/combo.module';
import { CartModule } from './cart/cart.module';
import * as bcrypt from 'bcrypt';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    ProfileModule,
    TruckModule,
    ProductModule,
    AuthModule,
    PrismaModule,
    BrandsModule,
    ComboModule,
    CartModule,
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
