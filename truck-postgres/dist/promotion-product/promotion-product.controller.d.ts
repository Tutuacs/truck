import { PromotionProductService } from './promotion-product.service';
import { CreatePromotionProductDto } from './dto/create-promotion-product.dto';
import { UpdatePromotionProductDto } from './dto/update-promotion-product.dto';
export declare class PromotionProductController {
    private readonly promotionProductService;
    constructor(promotionProductService: PromotionProductService);
    create(createPromotionProductDto: CreatePromotionProductDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePromotionProductDto: UpdatePromotionProductDto): string;
    remove(id: string): string;
}
