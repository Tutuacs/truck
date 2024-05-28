import { PrismaService } from "src/prisma/prisma.service";

export class PromotionVerify {
    constructor(protected readonly prisma: PrismaService) { }
    
    exPromotionId(id: string): Boolean {
        return Boolean(this.prisma.promotion.findUnique({ where: { id } }));
    }
}