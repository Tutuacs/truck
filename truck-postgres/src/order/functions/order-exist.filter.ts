import { PrismaService } from "src/prisma/prisma.service";

export class OrderVerify {
  constructor(protected readonly prisma: PrismaService) {}

  async exOrderId(id: string): Promise<boolean> {
    return Boolean(await this.prisma.order.count({ where: { id } }));
  }

}
