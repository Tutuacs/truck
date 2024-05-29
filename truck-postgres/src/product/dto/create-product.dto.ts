import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    image: string;

    @IsNotEmpty()
    @Type(() => Number)
    @IsNumber()
    price: number;

    @IsOptional()
    @IsString()
    color: string;

    @IsNotEmpty()
    @IsString()
    brandsId: string;

}
