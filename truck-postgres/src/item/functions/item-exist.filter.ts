import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemVerify {
  constructor(protected prisma: PrismaService) {}

  async exItemId(id: string): Promise<boolean> {
    return Boolean(await this.prisma.item.count({ where: { id } }));
  }
}
