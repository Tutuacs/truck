import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
export declare class PromotionService {
    create(createPromotionDto: CreatePromotionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePromotionDto: UpdatePromotionDto): string;
    remove(id: number): string;
}
