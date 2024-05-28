import { PromotionProduct } from "@prisma/client";
import { CreatePromotionProductDto } from "../dto/create-promotion-product.dto";
import { UpdatePromotionProductDto } from "../dto/update-promotion-product.dto";

export abstract class PromotionProductAbstract {
    abstract createPromotionProduct(data: CreatePromotionProductDto): Promise<PromotionProduct>;
    abstract findPromotionProduct(id: string): Promise<PromotionProduct>;
    abstract listPromotionProduct(): Promise<PromotionProduct[]>;
    abstract updatePromotionProduct(id: string, data: UpdatePromotionProductDto): Promise<PromotionProduct>;
    abstract removePromotionProduct(id: string): Promise<PromotionProduct>;
}