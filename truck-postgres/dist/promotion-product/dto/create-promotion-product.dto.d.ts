export declare class CreatePromotionProductDto {
    promotionProducts: UniqPromotionProductDTo[];
}
export declare class UniqPromotionProductDTo {
    price: number;
    active: boolean;
    productId: string;
    promotionId: string;
}
