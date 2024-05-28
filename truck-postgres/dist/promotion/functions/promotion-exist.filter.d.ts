import { PrismaService } from "src/prisma/prisma.service";
export declare class PromotionVerify {
    protected readonly prisma: PrismaService;
    constructor(prisma: PrismaService);
    exPromotionId(id: string): Boolean;
}
