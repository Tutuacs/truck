import { Module } from '@nestjs/common';
import { ComboService } from './combo.service';
import { ComboController } from './combo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { ComboFunctions } from './functions/combo.filter';
import { ComboAbstract } from './functions/combo-abstract';

@Module({
  imports: [PrismaModule],
  controllers: [ComboController],
  providers: [
    ComboService,
    PrismaService,
    {
      provide: ComboAbstract,
      useClass: ComboFunctions,
    },
  ],
})
export class ComboModule {}
