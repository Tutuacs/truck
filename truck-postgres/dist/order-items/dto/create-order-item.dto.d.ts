export declare class CreateOrderItemDto {
    quantity: number;
    price: number;
    productId: string;
    orderId: string;
}
export declare class ManyOrderItemsDto {
    items: CreateOrderItemDto[];
}
