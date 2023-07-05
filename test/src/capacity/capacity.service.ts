import { Injectable } from '@nestjs/common';
import { CreateCapacityDto } from './Validation/create-capacity.dto';
import { UpdateCapacityDto } from './Validation/update-capacity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CapacityService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateCapacityDto) {
    return this.prisma.createCapacity(data);
  }

  findAll(brand: string) {
    return this.prisma.findAllCapacitys();
  }

  async findOne(id: string) {
    await this.prisma.existCapacityId(id);
    return this.prisma.findUniqCapacity(id);
  }

  async update(id: string, data: UpdateCapacityDto) {
    await this.prisma.existCapacityId(id);
    return this.prisma.updateCapacity(id, data);
  }

  async remove(id: string) {
    await this.prisma.existCapacityId(id);
    return this.prisma.removeCapacity(id);
  }
}
