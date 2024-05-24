import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

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
    fromId: string;

}


// Truck = {
//     id: string;
//     image: string;
//     pound: number;
//     brand: string;
//     modelImage: string;
//     year: string;
//     capacity: string;
//     engine: string;
//     fromId: string;
// }