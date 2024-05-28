import { Injectable } from '@nestjs/common';
import { CreateTruckDto } from './dto/create-truck.dto';
import { UpdateTruckDto } from './dto/update-truck.dto';
import { TruckAbstract } from './functions/truck-abstract';

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

  listByUserId(id: string) {
    return this.truckFunctions.listByUserId(id);
  }

  update(id: string, data: UpdateTruckDto) {
    return this.truckFunctions.updateTruck(id, data);
  }

  remove(id: string) {
    return this.truckFunctions.removeTruck(id);
  }
}
