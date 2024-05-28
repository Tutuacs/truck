import { PrismaService } from 'src/prisma/prisma.service';
export declare class ItemVerify {
    protected prisma: PrismaService;
    constructor(prisma: PrismaService);
    exItemId(id: string): Promise<boolean>;
}
