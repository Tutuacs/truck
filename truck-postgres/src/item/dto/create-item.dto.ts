import { Type } from "class-transformer";
import { IsArray, IsNumber, IsOptional, IsString, Min, ValidateNested } from "class-validator";

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

    @IsString()
    comboId: string;

}

export class CreateManyItemsDto {

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateItemDto)
    items: CreateItemDto[];
}
