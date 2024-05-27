import { PrismaService } from "src/prisma/prisma.service";

export class PromotionProductVerify {
    constructor(protected readonly prisma: PrismaService) { }
}