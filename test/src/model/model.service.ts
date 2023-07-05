import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateModelDto } from './Validation/create-model.dto';
import { UpdateModelDto } from './Validation/update-model.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConnectCapacityDto } from './Validation/connect-capacity.dto';

@Injectable()
export class ModelService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateModelDto) {
    return this.prisma.createModel(data);
  }

  async connect(id: string, idd: string, connect: string) {
    if(connect == "connect"){
      await this.prisma.existCapacityId(idd);
      await this.prisma.existModelId(id);
      return this.prisma.connectCapacity(id, idd);
    }else if(connect == "disconnect"){
      await this.prisma.existCapacityId(idd);
      await this.prisma.existModelId(id);
      return this.prisma.disconnectCapacity(id, idd);
    }else{
      throw new NotImplementedException(`Opção "${connect}" não conhecida`);
    }
  }

  findAll(truck: string) {
    return this.prisma.findAllModels();
  }

  async findOne(id: string) {
    await this.prisma.existModelId(id);
    return this.prisma.findUniqModel(id);
  }

  async update(id: string, data: UpdateModelDto) {
    await this.prisma.existModelId(id);
    return this.prisma.updateModel(id, data);
  }

  async remove(id: string) {
    await this.prisma.existModelId(id);
    return this.prisma.removeModel(id);
  }
}
