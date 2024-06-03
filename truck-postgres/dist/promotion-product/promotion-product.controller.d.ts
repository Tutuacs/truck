import { PromotionProductService } from './promotion-product.service';
import { CreatePromotionProductDto } from './dto/create-promotion-product.dto';
import { UpdatePromotionProductDto } from './dto/update-promotion-product.dto';
export declare class PromotionProductController {
    private readonly promotionProductService;
    constructor(promotionProductService: PromotionProductService);
    create(createPromotionProductDto: CreatePromotionProductDto): any;
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
    update(id: string, updatePromotionProductDto: UpdatePromotionProductDto): Promise<{
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
