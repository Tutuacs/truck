import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductVerify {
    protected readonly prisma: PrismaService;
    constructor(prisma: PrismaService);
    productExist(id: string): Promise<boolean>;
}
