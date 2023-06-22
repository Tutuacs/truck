import { Injectable, NotImplementedException } from '@nestjs/common';
import { ConnectUsertruckDto } from './Validation/create-usertruck.dto';
import { UpdateUsertruckDto } from './Validation/update-usertruck.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsertruckService {

  constructor(private readonly prisma: PrismaService) {}

  async connect(connect: string, data: ConnectUsertruckDto) {
    if(connect == "connect"){
      await this.prisma.existCapacityId(data.Capacity);
      await this.prisma.existModelId(data.Model);
      await this.prisma.existTruckId(data.Truck);
      // return this.prisma.connectUserTruck(id, data);
    }else if(connect == "disconnect"){
      await this.prisma.existCapacityId(data.Capacity);
      await this.prisma.existModelId(data.Model);
      await this.prisma.existTruckId(data.Truck);
      // return this.prisma.disconnectUserTruck(id, data);
    }else{
      throw new NotImplementedException(`Opção "${connect}" não conhecida`);
    }
  }

  findAll() {
    return `This action returns all usertruck`;
  }

  findOne(id: string) {
    return `This action returns a #${id} usertruck`;
  }

  update(id: string, data: UpdateUsertruckDto) {
    return `This action updates a #${id} usertruck`;
  }

  remove(id: string) {
    return `This action removes a #${id} usertruck`;
  }
}
