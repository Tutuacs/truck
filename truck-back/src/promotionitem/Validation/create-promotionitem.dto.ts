import { Type } from "class-transformer"
import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreatePromotionitemDto {

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    minQuantity: number;


    @Type(() => Number)
    price: number;
 
    @IsString()
    productId: string;
}
