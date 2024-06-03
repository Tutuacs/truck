import { Injectable } from '@nestjs/common';
import { CreatePromotionProductDto } from './dto/create-promotion-product.dto';
import { UpdatePromotionProductDto } from './dto/update-promotion-product.dto';
import { PromotionProductAbstract } from './functions/promotion-product-abstract';

@Injectable()
export class PromotionProductService {

  constructor(private readonly promotionProductFunctions: PromotionProductAbstract){}

  create(data: CreatePromotionProductDto) {
    return this.promotionProductFunctions.createPromotionProduct(data);
  }

  findAll() {
    return this.promotionProductFunctions.listPromotionProduct();
  }

  findAllByPromotion(id: string) {
    return this.promotionProductFunctions.listByPromotion(id);
  }

  findOne(id: string) {
    return this.promotionProductFunctions.findPromotionProduct(id);
  }

  update(id: string, data: UpdatePromotionProductDto) {
    return this.promotionProductFunctions.updatePromotionProduct(id, data);
  }

  remove(id: string) {
    return this.promotionProductFunctions.removePromotionProduct(id);
  }
}
