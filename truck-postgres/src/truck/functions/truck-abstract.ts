import { Prisma, Truck } from '@prisma/client';
import { CreateTruckDto } from '../dto/create-truck.dto';
import { DefaultArgs } from '@prisma/client/runtime/library';

export abstract class TruckAbstract {
  abstract createTruck(data: CreateTruckDto): Promise<Truck>;

  abstract findTruck(id: string): Promise<Truck>;

  abstract listTruck(): Promise<Truck[]>;

  abstract grupTruckBrand(): Prisma.GetTruckGroupByPayload<{
    by: 'brand'[];
    where: {
      fromId: null;
    };
  }>;

  abstract updateTruck(
    id: string,
    data: CreateTruckDto,
  ): Prisma.Prisma__TruckClient<
    {
      id: string;
      image: string;
      pound: number;
      brand: string;
      year: string;
      capacity: string;
      engine: string;
      fromId: string;
    },
    never,
    DefaultArgs
  >;

  abstract removeTruck(id: string): Promise<Truck>;
  
}
