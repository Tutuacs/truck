import { PrismaService } from 'src/prisma/prisma.service';
export declare class OrderItemsVerify {
    protected readonly prisma: PrismaService;
    constructor(prisma: PrismaService);
    orderItemExist(id: string): Promise<boolean>;
}
