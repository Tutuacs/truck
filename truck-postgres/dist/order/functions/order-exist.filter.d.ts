import { PrismaService } from "src/prisma/prisma.service";
export declare class OrderVerify {
    protected readonly prisma: PrismaService;
    constructor(prisma: PrismaService);
    exOrderId(id: string): Promise<boolean>;
}
