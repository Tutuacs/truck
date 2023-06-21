import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateTruckDto } from './Validation/create-truck.dto';
import { UpdateTruckDto } from './Validation/update-truck.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConnectModelDto } from './Validation/connect-model.dto';

@Injectable()
export class TruckService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateTruckDto) {
    return this.prisma.createTruck(data);
  }

  findAll(brand: string) {
    return this.prisma.findAllTrucks();
  }

  findOne(id: string) {
    return this.prisma.findUniqTruck(id);
  }

  update(id: string, data: UpdateTruckDto) {
    return this.prisma.updateTruck(id, data);
  }

  remove(id: string) {
    return this.prisma.removeTruck(id);
  }
}
