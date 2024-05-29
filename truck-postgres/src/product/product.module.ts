import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';
import { ProductAbstract } from './functions/product-abstract';
import { ProductFunction } from './functions/product.filter';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [ProductController],
  providers: [
    ProductService,
    {
      provide: ProductAbstract,
      useClass: ProductFunction,
    },
  ],
})
export class ProductModule {}
