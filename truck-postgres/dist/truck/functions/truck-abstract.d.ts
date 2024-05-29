import { Prisma, Truck } from '@prisma/client';
import { CreateTruckDto } from '../dto/create-truck.dto';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { UpdateTruckDto } from '../dto/update-truck.dto';
import { AddTruckDto } from '../dto/add-truck.dto';
export declare abstract class TruckAbstract {
    abstract createTruck(data: CreateTruckDto): Promise<Truck>;
    abstract findTruck(id: string): Promise<Truck>;
    abstract listTruck(): Promise<Truck[]>;
    abstract listByUserId(id: string): Prisma.Prisma__UserClient<{
        Trucks: {
            id: string;
            name: string;
            image: string;
            pound: number;
            brand: string;
            year: string;
            capacity: string;
            engine: string;
            fromId: string;
        }[];
    }, null, DefaultArgs>;
    abstract grupTruckBrand(): Prisma.GetTruckGroupByPayload<{
        by: 'brand'[];
        where: {
            fromId: null;
        };
    }>;
    abstract updateTruck(id: string, data: UpdateTruckDto): Prisma.Prisma__TruckClient<{
        id: string;
        image: string;
        pound: number;
        brand: string;
        year: string;
        capacity: string;
        engine: string;
        fromId: string;
    }, never, DefaultArgs>;
    abstract removeTruck(id: string): Promise<Truck>;
    abstract linkTruck(data: AddTruckDto, user: {
        userId: string;
    }): Promise<Truck[]>;
    abstract unlinkTruck(data: AddTruckDto, user: {
        userId: string;
    }): Promise<Truck[]>;
}
