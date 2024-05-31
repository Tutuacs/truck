import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateTruckDto } from './dto/create-truck.dto';
import { UpdateTruckDto } from './dto/update-truck.dto';
import { TruckAbstract } from './functions/truck-abstract';
import { Role } from 'src/decorators';
import { AddRelationDto } from './dto/add-truck.dto';

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
    return this.truckFunctions.findTruck(id);
  }

  listByUserId(id: string, user: {role: number, id: string}) {
    if (user.role != Role.Admin && user.id != id) {
      throw new UnauthorizedException("Seu usuário não pode visualizar os caminhões de outro usuário.")
    }
    return this.truckFunctions.listByUserId(id);
  }

  async groupTrucks() {
    return this.truckFunctions.groupTruckBrand();
  }

  linkTruck(data: AddRelationDto, user: {userId: string}) {
    return this.truckFunctions.linkTruck(data, user);
  }

  unlinkTruck(data: AddRelationDto, user: {userId: string}) {
    return this.truckFunctions.unlinkTruck(data, user);
  }

  update(id: string, data: UpdateTruckDto) {
    return this.truckFunctions.updateTruck(id, data);
  }

  remove(id: string) {
    return this.truckFunctions.removeTruck(id);
  }
}
