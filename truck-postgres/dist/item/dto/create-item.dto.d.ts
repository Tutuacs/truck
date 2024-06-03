export declare class CreateItemDto {
    price: number;
    minCombo: number;
    maxCombo: number;
    productId: string;
    comboId: string;
}
export declare class CreateManyItemsDto {
    items: CreateItemDto[];
}
