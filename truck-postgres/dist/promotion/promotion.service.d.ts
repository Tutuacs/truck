import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { PromotionAbstract } from './functions/promotion-abstract';
export declare class PromotionService {
    private readonly promotionFunctions;
    constructor(promotionFunctions: PromotionAbstract);
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
