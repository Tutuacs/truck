import { TruckAbstract } from './truck-abstract';
import { Truck } from '@prisma/client';
import { CreateTruckDto } from '../dto/create-truck.dto';
import { UpdateTruckDto } from '../dto/update-truck.dto';
import { TruckVerify } from './truck-exist.filter';
import { AddTruckDto } from '../dto/add-truck.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TruckFunctions extends TruckVerify implements TruckAbstract {
    constructor(prisma: PrismaService);
    createTruck(data: CreateTruckDto): Promise<Truck>;
    findTruck(id: string): Promise<Truck>;
    listTruck(): Promise<Truck[]>;
    listByUserId(id: string): import("@prisma/client").Prisma.Prisma__UserClient<{
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
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    grupTruckBrand(): import("@prisma/client").Prisma.GetTruckGroupByPayload<{
        by: "brand"[];
        where: {
            fromId: null;
        };
    }>;
    updateTruck(id: string, data: UpdateTruckDto): import("@prisma/client").Prisma.Prisma__TruckClient<{
        id: string;
        name: string;
        image: string;
        pound: number;
        brand: string;
        year: string;
        capacity: string;
        engine: string;
        fromId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    removeTruck(id: string): import("@prisma/client").Prisma.Prisma__TruckClient<{
        id: string;
        name: string;
        image: string;
        pound: number;
        brand: string;
        year: string;
        capacity: string;
        engine: string;
        fromId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    linkTruck(data: AddTruckDto, user: {
        userId: string;
    }): Promise<{
        id: string;
        name: string;
        image: string;
        pound: number;
        brand: string;
        year: string;
        capacity: string;
        engine: string;
        fromId: string;
    }[]>;
    unlinkTruck(data: AddTruckDto, user: {
        userId: string;
    }): Promise<{
        id: string;
        name: string;
        image: string;
        pound: number;
        brand: string;
        year: string;
        capacity: string;
        engine: string;
        fromId: string;
    }[]>;
}
