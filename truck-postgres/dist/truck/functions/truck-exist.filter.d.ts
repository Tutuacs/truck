import { PrismaService } from "src/prisma/prisma.service";
export declare class TruckVerify {
    protected readonly prisma: PrismaService;
    constructor(prisma: PrismaService);
    exTruckId(id: string): Promise<boolean>;
    exTruckName(name: string): Promise<boolean>;
}
