import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

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
