import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateItemDto {

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    minQuantity:number;

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    price:number;

    @IsNotEmpty()
    productId: string;
}
