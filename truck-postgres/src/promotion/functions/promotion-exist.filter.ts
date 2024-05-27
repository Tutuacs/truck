import { PrismaService } from "src/prisma/prisma.service";

export class PromotionVerify {
    constructor(protected readonly prisma: PrismaService) { }
    
}