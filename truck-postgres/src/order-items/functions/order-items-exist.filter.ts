import { PrismaService } from 'src/prisma/prisma.service';

export class OrderItemVerify {
  constructor(protected readonly prisma: PrismaService) {}

  async orderItemExist(id: string): Promise<boolean> {
    return Boolean(
      await this.prisma.orderItems.findUnique({
        where: { id },
      }),
    );
  }
}
