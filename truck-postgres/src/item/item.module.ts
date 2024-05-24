import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { ItemAbstract } from './functions/item-abstract';
import { ItemFunctions } from './functions/item.filter';

@Module({
  imports: [PrismaModule],
  controllers: [ItemController],
  providers: [ItemService, PrismaService, {
    provide: ItemAbstract,
    useClass: ItemFunctions,
  }],
})
export class ItemModule {}
