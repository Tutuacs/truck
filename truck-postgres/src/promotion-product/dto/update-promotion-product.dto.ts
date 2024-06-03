import { PartialType } from '@nestjs/mapped-types';
import { CreatePromotionProductDto, UniqPromotionProductDTo } from './create-promotion-product.dto';

export class UpdatePromotionProductDto extends PartialType(UniqPromotionProductDTo) {}
