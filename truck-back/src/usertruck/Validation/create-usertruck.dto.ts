import { IsOptional, IsString } from "class-validator";

export class ConnectUsertruckDto {

    // @IsString()
    // User: string;

    @IsString()
    Truck: string;

    @IsOptional()
    @IsString()
    Model: string;

    @IsOptional()
    @IsString()
    Capacity: string;

}
