import { Module } from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { OrderItemsController } from './order-items.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { OrderItemsAbstract } from './functions/order-items-abstract';
import { OrderItemsFunction } from './functions/order-items.filter';

@Module({
  imports: [PrismaModule],
  controllers: [OrderItemsController],
  providers: [OrderItemsService,
    {
      provide: OrderItemsAbstract,
      useValue: OrderItemsFunction,
    }
  ],
})
export class OrderItemsModule {}
