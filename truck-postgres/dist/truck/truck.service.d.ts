import { CreateTruckDto } from './dto/create-truck.dto';
import { UpdateTruckDto } from './dto/update-truck.dto';
import { TruckAbstract } from './functions/truck-abstract';
import { AddRelationDto } from './dto/add-truck.dto';
export declare class TruckService {
    private readonly truckFunctions;
    constructor(truckFunctions: TruckAbstract);
    create(data: CreateTruckDto): Promise<{
        id: string;
        name: string;
        image: string;
        pound: number;
        brand: string;
        year: string;
        capacity: string;
        engine: string;
        fromId: string;
    }>;
    findAll(): Promise<{
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
    findOne(id: string): Promise<{
        id: string;
        name: string;
        image: string;
        pound: number;
        brand: string;
        year: string;
        capacity: string;
        engine: string;
        fromId: string;
    }>;
    listByUserId(id: string, user: {
        role: number;
        id: string;
    }): import("@prisma/client").Prisma.Prisma__UserClient<{
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
    groupTrucks(): Promise<import("@prisma/client").Prisma.PickEnumerable<import("@prisma/client").Prisma.TruckGroupByOutputType, "brand"[]>[]>;
    linkTruck(data: AddRelationDto, user: {
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
    unlinkTruck(data: AddRelationDto, user: {
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
    update(id: string, data: UpdateTruckDto): import("@prisma/client").Prisma.Prisma__TruckClient<{
        id: string;
        image: string;
        pound: number;
        brand: string;
        year: string;
        capacity: string;
        engine: string;
        fromId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        image: string;
        pound: number;
        brand: string;
        year: string;
        capacity: string;
        engine: string;
        fromId: string;
    }>;
}
