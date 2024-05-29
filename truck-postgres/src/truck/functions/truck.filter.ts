import { Injectable } from '@nestjs/common';
import { TruckAbstract } from './truck-abstract';
import { Truck } from '@prisma/client';
import { CreateTruckDto } from '../dto/create-truck.dto';
import { UpdateTruckDto } from '../dto/update-truck.dto';
import { TruckVerify } from './truck-exist.filter';
import { AddTruckDto } from '../dto/add-truck.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TruckFunctions extends TruckVerify implements TruckAbstract {
  constructor(prisma: PrismaService) {
    super(prisma);
  }

  createTruck(data: CreateTruckDto): Promise<Truck> {
    console.log('Chegou');
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

  listByUserId(id: string) {
    return this.prisma.user.findFirst({
      where: {
        id,
      },
      select: {
        Trucks: true,
      },
    });
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

  async linkTruck(data: AddTruckDto, user: { userId: string }) {
    const truck = await this.prisma.user.update({
      where: {
        id: user.userId,
      },
      data: {
        Trucks: {
          connect: data.trucks,
        },
      },
      select: {
        Trucks: true,
      },
    });
    return truck.Trucks;
  }

  async unlinkTruck(data: AddTruckDto, user: { userId: string }) {
    const truck = await this.prisma.user.update({
      where: {
        id: user.userId,
      },
      data: {
        Trucks: {
          disconnect: data.trucks,
        },
      },
      select: {
        Trucks: true,
      },
    });
    return truck.Trucks;
  }
}
