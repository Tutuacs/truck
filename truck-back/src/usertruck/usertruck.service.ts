import {
  BadRequestException,
  Injectable,
  NotImplementedException,
} from '@nestjs/common';
import { ConnectUsertruckDto } from './Validation/connect-usertruck.dto';
import { UpdateUsertruckDto } from './Validation/update-usertruck.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsertruckService {
  constructor(private readonly prisma: PrismaService) {}

  async connect(connect: string, data: ConnectUsertruckDto, id: string) {
    if (connect == 'connect') {
      if (Array.isArray(data.capacityId) && data.capacityId.length > 0) {
        await this.prisma.existCapacityId(data.capacityId);
      }

      if (Array.isArray(data.modelId) && data.modelId.length > 0) {
        await this.prisma.existModelId(data.modelId);
      }
      await this.prisma.existTruckId(data.truckId);
      return this.prisma.connectUserTruck(id, data);
    } else if (connect == 'disconnect') {
      await this.prisma.existCapacityId(data.capacityId);
      await this.prisma.existModelId(data.modelId);
      await this.prisma.existTruckId(data.truckId);
      // return this.prisma.disconnectUserTruck(id, data);
    } else {
      throw new NotImplementedException(`Opção "${connect}" não conhecida`);
    }
  }

  findAll() {
    return this.prisma.findAllUserTrucks();
  }

  findOne(id: string) {
    return this.prisma.findUniqUserTruck(id);
  }

  update(id: string, data: UpdateUsertruckDto) {
    return this.prisma.updateUserTruck(id, data);
  }

  remove(id: string) {
    return this.prisma.removeUserTruck(id);
  }
}
