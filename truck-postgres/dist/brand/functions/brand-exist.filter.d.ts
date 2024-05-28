import { PrismaService } from "src/prisma/prisma.service";
export declare class BrandVerify {
    protected readonly prisma: PrismaService;
    constructor(prisma: PrismaService);
    exBrandId(id: string): Promise<boolean>;
    exBrandName(name: string): Promise<boolean>;
}
