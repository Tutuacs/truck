import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateTruckDto } from './Validation/create-truck.dto';
import { UpdateTruckDto } from './Validation/update-truck.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TruckService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateTruckDto) {
    data.pound = Number(data.pound);
    return this.prisma.createTruck(data);
  }

  async connect(id: string, idd: string, connect: string) {
    if(connect == "connect"){
      await this.prisma.existModelId(idd);
      await this.prisma.existTruckId(id);
      return this.prisma.connectModel(id, idd);
    }else if(connect == "disconnect"){
      await this.prisma.existModelId(idd);
      await this.prisma.existTruckId(id);
      return this.prisma.disconnectModel(id, idd);
    }else{
      throw new NotImplementedException(`Opção "${connect}" não conhecida`);
    }
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