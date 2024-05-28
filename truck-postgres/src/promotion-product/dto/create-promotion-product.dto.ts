import { Type } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePromotionProductDto {

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    price: number;

    @IsOptional()
    @Type(() => Boolean)
    @IsBoolean()
    active: boolean;

    @IsNotEmpty()
    @IsString()
    productId: string;
    
    @IsNotEmpty()
    @IsString()
    promotionId: string;
    
}
