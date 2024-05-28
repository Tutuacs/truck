import { Promotion } from "@prisma/client";
import { CreatePromotionDto } from "../dto/create-promotion.dto";
import { UpdatePromotionDto } from "../dto/update-promotion.dto";

export abstract class PromotionAbstract {
    abstract createPromotion(data: CreatePromotionDto): Promise<Promotion>;
    abstract findPromotion(id: string): Promise<Promotion>;
    abstract listPromotion(): Promise<Promotion[]>;
    abstract updatePromotion(id: string, data: UpdatePromotionDto): Promise<Promotion>;
    abstract removePromotion(id: string): Promise<Promotion>;
}
