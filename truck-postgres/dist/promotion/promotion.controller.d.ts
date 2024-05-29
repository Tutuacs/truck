import { PromotionService } from './promotion.service';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
export declare class PromotionController {
    private readonly promotionService;
    constructor(promotionService: PromotionService);
    create(data: CreatePromotionDto): Promise<{
        id: string;
        name: string;
        promotionFrom: Date;
        promotionTo: Date;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        promotionFrom: Date;
        promotionTo: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        promotionFrom: Date;
        promotionTo: Date;
    }>;
    update(id: string, data: UpdatePromotionDto): Promise<{
        id: string;
        name: string;
        promotionFrom: Date;
        promotionTo: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        promotionFrom: Date;
        promotionTo: Date;
    }>;
}
