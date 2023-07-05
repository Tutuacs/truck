import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ItemController, PrismaModule],
  providers: [ItemService]
})
export class ItemModule {}
