import { CreatePromotionProductDto } from './dto/create-promotion-product.dto';
import { UpdatePromotionProductDto } from './dto/update-promotion-product.dto';
export declare class PromotionProductService {
    create(createPromotionProductDto: CreatePromotionProductDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePromotionProductDto: UpdatePromotionProductDto): string;
    remove(id: number): string;
}
