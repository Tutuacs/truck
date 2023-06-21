import { Injectable } from '@nestjs/common';
import { CreatePromotionDto } from './Validation/create-promotion.dto';
import { UpdatePromotionDto } from './Validation/update-promotion.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PromotionService {

  constructor(private readonly prisma: PrismaService) {}

  create(data: CreatePromotionDto) {
    return this.prisma.createPromotion(data) ;
  }

  findAll() {
    return this.prisma.findAllPromotions();
  }

  findOne(id: string) {
    return this.prisma.findUniqPromotion(id);
  }

  update(id: string, data: UpdatePromotionDto) {
    return this.prisma.updatePromotion(id,data);
  }

  remove(id: string) {
    return this.prisma.removePromotion(id);
  }
}
