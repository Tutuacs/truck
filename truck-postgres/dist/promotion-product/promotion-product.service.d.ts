import { CreatePromotionProductDto } from './dto/create-promotion-product.dto';
import { UpdatePromotionProductDto } from './dto/update-promotion-product.dto';
import { PromotionProductAbstract } from './functions/promotion-product-abstract';
export declare class PromotionProductService {
    private readonly promotionProductFunctions;
    constructor(promotionProductFunctions: PromotionProductAbstract);
    create(data: CreatePromotionProductDto): any;
    findAll(): Promise<{
        id: string;
        price: number;
        active: boolean;
        productId: string;
        promotionId: string;
    }[]>;
    findAllByPromotion(id: string): Promise<{
        id: string;
        price: number;
        active: boolean;
        productId: string;
        promotionId: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        price: number;
        active: boolean;
        productId: string;
        promotionId: string;
    }>;
    update(id: string, data: UpdatePromotionProductDto): Promise<{
        id: string;
        price: number;
        active: boolean;
        productId: string;
        promotionId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        price: number;
        active: boolean;
        productId: string;
        promotionId: string;
    }>;
}
