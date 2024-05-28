import { PromotionService } from './promotion.service';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
export declare class PromotionController {
    private readonly promotionService;
    constructor(promotionService: PromotionService);
    create(createPromotionDto: CreatePromotionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePromotionDto: UpdatePromotionDto): string;
    remove(id: string): string;
}
