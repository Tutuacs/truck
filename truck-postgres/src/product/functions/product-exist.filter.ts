import { PrismaService } from 'src/prisma/prisma.service';

export class ProductVerify {
  constructor(protected readonly prisma: PrismaService) {}

  async productExist(id: string): Promise<boolean> {
    return Boolean(
      await this.prisma.orderItems.findUnique({
        where: { id },
      }),
    );
  }
}