import { TruckService } from './truck.service';
import { CreateTruckDto } from './dto/create-truck.dto';
import { UpdateTruckDto } from './dto/update-truck.dto';
import { AddTruckDto } from './dto/add-truck.dto';
export declare class TruckController {
    private readonly truckService;
    constructor(truckService: TruckService);
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
    }[]>;
    listByUserId(userId: string, user: {
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
    linkTruck(trucks: AddTruckDto, user: {
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
    unlinkTruck(trucks: AddTruckDto, user: {
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
    update(id: string, updateTruckDto: UpdateTruckDto): import("@prisma/client").Prisma.Prisma__TruckClient<{
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
