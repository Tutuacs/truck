import { IsDate, IsEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateOrderDto {

    @IsOptional()
    @IsEmpty()
    @IsString()
    userId: string;

    @IsOptional()
    @IsEmpty()
    @IsNumber()
    total: number;

    @IsDate()
    date: Date = new Date();

    @IsOptional()
    @IsEmpty()
    @IsString()
    imageId: string;

    @IsOptional()
    @IsEmpty()
    @IsNumber()
    status: number;

}
