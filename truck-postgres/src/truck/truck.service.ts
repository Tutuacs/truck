import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateTruckDto } from './dto/create-truck.dto';
import { UpdateTruckDto } from './dto/update-truck.dto';
import { TruckAbstract } from './functions/truck-abstract';
import { Role } from 'src/decorators';
import { AddTruckDto } from './dto/add-truck.dto';

@Injectable()
export class TruckService {
  constructor(private readonly truckFunctions: TruckAbstract) {}

  create(data: CreateTruckDto) {
    return this.truckFunctions.createTruck(data);
  }

  findAll() {
    return this.truckFunctions.listTruck();
  }

  findOne(id: string) {
    return this.truckFunctions.listTruck();
  }

  listByUserId(id: string, user: {role: number, id: string}) {
    if (user.role != Role.Admin && user.id != id) {
      throw new UnauthorizedException("Seu usuário não pode visualizar os caminhões de outro usuário.")
    }
    return this.truckFunctions.listByUserId(id);
  }

  linkTruck(data: AddTruckDto, user: {userId: string}) {
    return this.truckFunctions.linkTruck(data, user);
  }

  unlinkTruck(data: AddTruckDto, user: {userId: string}) {
    return this.truckFunctions.unlinkTruck(data, user);
  }

  update(id: string, data: UpdateTruckDto) {
    return this.truckFunctions.updateTruck(id, data);
  }

  remove(id: string) {
    return this.truckFunctions.removeTruck(id);
  }
}
