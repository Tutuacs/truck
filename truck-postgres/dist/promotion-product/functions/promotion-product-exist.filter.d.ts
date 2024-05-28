import { PrismaService } from "src/prisma/prisma.service";
export declare class PromotionProductVerify {
    protected readonly prisma: PrismaService;
    constructor(prisma: PrismaService);
    exPromotionProductId(id: string): Boolean;
}
