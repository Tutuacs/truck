import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { BrandAbstract } from './functions/brand-abstract';
import { BrandFunctions } from './functions/brand.filter';

@Module({
  imports: [PrismaModule],
  controllers: [BrandController],
  providers: [
    BrandService,
    PrismaService,
    {
      provide: BrandAbstract,
      useClass: BrandFunctions,
    },
  ],
})
export class BrandModule {}
