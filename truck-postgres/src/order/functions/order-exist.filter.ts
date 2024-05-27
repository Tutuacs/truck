import { PrismaService } from "src/prisma/prisma.service";

export class OrderVerify {
  constructor(protected readonly prisma: PrismaService) {}
}
