import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {

    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description: string;

    @Type(() => Number)
    @IsNumber()
    price: number;
}
