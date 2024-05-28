import { Module } from '@nestjs/common';
import { TruckService } from './truck.service';
import { TruckController } from './truck.controller';
import { TruckFunctions } from './functions/truck.filter';
import { TruckAbstract } from './functions/truck-abstract';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TruckController],
  providers: [
    TruckService,
    {
      provide: TruckAbstract,
      useClass: TruckFunctions,
    },
  ],
})
export class TruckModule {}
