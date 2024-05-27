import { PrismaService } from 'src/prisma/prisma.service';

export class ItemVerify {
  constructor(protected prisma: PrismaService) {}

  async exItemId(id: string): Promise<boolean> {
    return Boolean(await this.prisma.item.count({ where: { id } }));
  }
}
