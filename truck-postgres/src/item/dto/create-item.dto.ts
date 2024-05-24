import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateItemDto {

    @Type(() => Number)
    @IsNumber()
    price: number;
    
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(1)
    minCombo: number;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(1)
    maxCombo: number;

    @IsString()
    productId: string;

}
