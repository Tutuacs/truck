import { Injectable } from '@nestjs/common';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { PromotionAbstract } from './functions/promotion-abstract';

@Injectable()
export class PromotionService {
  constructor(private readonly promotionFunctions: PromotionAbstract) {}

  create(data: CreatePromotionDto) {
    /*
    EG:
    	"promotionFrom": "2024-06-03T13:05:49.338Z",
	    "promotionTo": "2024-06-10T13:05:49.338Z"
    */
    return this.promotionFunctions.createPromotion(data);
  }

  findAll() {
    return this.promotionFunctions.listPromotion();
  }

  findOne(id: string) {
    return this.promotionFunctions.findPromotion(id);
  }

  update(id: string, data: UpdatePromotionDto) {
    return this.promotionFunctions.updatePromotion(id, data);
  }

  remove(id: string) {
    return this.promotionFunctions.removePromotion(id);
  }
}
