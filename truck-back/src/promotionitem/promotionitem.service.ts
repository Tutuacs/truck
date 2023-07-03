import { Injectable } from '@nestjs/common';
import { CreatePromotionitemDto } from './Validation/create-promotionitem.dto';
import { UpdatePromotionitemDto } from './Validation/update-promotionitem.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PromotionitemService {

  constructor(private readonly prisma: PrismaService) {}

  create(data: CreatePromotionitemDto) {
    return this.prisma.createPromotionItem(data);
  }

  findAll() {
    return this.prisma.findAllPromotionItems();
  }

  findOne(id: string) {
    return this.prisma.findUniqPromotionItem(id);
  }

  update(id: string, data: UpdatePromotionitemDto) {
    return this.prisma.updatePromotionItem(id,data);
  }

  remove(id: string) {
    return this.prisma.removePromotionItem(id);
  }
}
