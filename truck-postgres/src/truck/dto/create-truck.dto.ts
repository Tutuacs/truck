import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateTruckDto {

    @IsOptional()
    @IsString()
    image: string;

    @Type(() => Number)
    @IsNumber()
    pound: number;

    @IsString()
    brand: string;

    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    year: string;

    @IsOptional()
    @IsString()
    capacity: string;
    
    @IsOptional()
    @IsString()
    engine: string;

    @IsOptional()
    @IsString()
    @MinLength(36)
    fromId: string;

}