import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";

export class CreateOrderItemDto {

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    quantity: number;

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsString()
    productId: string;

    @IsNotEmpty()
    @IsString()
    orderId: string;
    
}

export class ManyOrderItemsDto {

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateOrderItemDto)
    items: CreateOrderItemDto[];
}
