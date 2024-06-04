import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { OrderAbstract } from './functions/order-abstract';
import { OrderFunctions } from './functions/order.filter';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [OrderController],
  providers: [OrderService,
    {
      provide: OrderAbstract,
      useClass: OrderFunctions
    }
  ],
})
export class OrderModule {}
