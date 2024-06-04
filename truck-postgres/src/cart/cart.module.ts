import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { CartFunctions } from './functions/cart.filter';
import { CartAbstract } from './functions/cart-abstract';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [CartController],
  providers: [CartService,
    {
      provide: CartAbstract,
      useClass: CartFunctions
    }
  ],
})
export class CartModule {}
