import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString, Min, MinLength, ValidateNested } from "class-validator";

export class CreateItemDto {

    @IsOptional()
    @IsEmpty()
    id: string;

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
    maxCombo: number;

    @IsOptional()
    @IsBoolean()
    active: boolean;

    @IsNotEmpty()
    @IsString()
    @MinLength(36)
    productId: string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(36)
    comboId: string;

}

export class CreateManyItemsDto {

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateItemDto)
    items: CreateItemDto[];
}
