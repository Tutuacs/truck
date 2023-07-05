import { IsOptional, IsString } from "class-validator";

export class ConnectUsertruckDto {

    // @IsString()
    // User: string;

    @IsString()
    truckId: string;

    @IsOptional()
    @IsString()
    modelId: string;

    @IsOptional()
    @IsString()
    capacityId: string;

}
