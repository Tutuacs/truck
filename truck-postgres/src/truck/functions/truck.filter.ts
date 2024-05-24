import { Injectable } from '@nestjs/common';
import { TruckAbstract } from './truck-abstract';
import { PrismaService } from 'src/prisma/prisma.service';
import { Truck } from '@prisma/client';
import { CreateTruckDto } from '../dto/create-truck.dto';
import { UpdateTruckDto } from '../dto/update-truck.dto';
import { TruckVerify } from './truck-exist.filter';

@Injectable()
export class TruckFunctions extends TruckVerify implements TruckAbstract {
  constructor(prisma: PrismaService) {
    super(prisma);
  }

  createTruck(data: CreateTruckDto): Promise<Truck> {
    return this.prisma.truck.create({
      data,
    });
  }

  findTruck(id: string): Promise<Truck> {
    return this.prisma.truck.findUnique({
      where: {
        id,
      },
    });
  }

  listTruck(): Promise<Truck[]> {
    return this.prisma.truck.findMany();
  }

  grupTruckBrand() {
    return this.prisma.truck.groupBy({
      by: ['brand'],
      where: {
        fromId: null,
      },
    });
  }

  updateTruck(id: string, data: UpdateTruckDto) {
    return this.prisma.truck.update({
      where: {
        id,
      },
      data,
    });
  }

  removeTruck(id: string) {
    return this.prisma.truck.delete({
      where: {
        id,
      },
    });
  }
  
}
