export declare class CreateItemDto {
    id: string;
    price: number;
    minCombo: number;
    maxCombo: number;
    active: boolean;
    productId: string;
    comboId: string;
}
export declare class CreateManyItemsDto {
    items: CreateItemDto[];
}
