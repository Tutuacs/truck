import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";

export class CreatePromotionProductDto {

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => UniqPromotionProductDTo)
    promotionProducts: UniqPromotionProductDTo[];
    
}


export class UniqPromotionProductDTo {

    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    price: number;

    @IsOptional()
    @Type(() => Boolean)
    @IsBoolean()
    active: boolean;

    @IsNotEmpty()
    @IsString()
    @MinLength(36)
    productId: string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(36)
    promotionId: string;
}