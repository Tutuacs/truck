import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BrandAbstract } from './functions/brand-abstract';
import { BrandFunctions } from './functions/brand.filter';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [BrandController],
  providers: [
    BrandService,
    {
      provide: BrandAbstract,
      useClass: BrandFunctions,
    },
  ],
})
export class BrandModule {}
