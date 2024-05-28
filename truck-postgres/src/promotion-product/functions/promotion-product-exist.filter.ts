import { PrismaService } from "src/prisma/prisma.service";

export class PromotionProductVerify {
    constructor(protected readonly prisma: PrismaService) { }

    exPromotionProductId(id: string): Boolean {
        return Boolean(this.prisma.promotionProduct.findUnique({ where: { id } }));
    }
    
}