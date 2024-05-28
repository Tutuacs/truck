import { PrismaService } from "src/prisma/prisma.service";

export class CartVerify {
    constructor(protected readonly prisma: PrismaService,
    ) { }
}