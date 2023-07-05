import { IsOptional, IsString } from "class-validator";

export class CreatetUsertruckDto {

    @IsString()
    truckId: string;

    @IsOptional()
    @IsString()
    modelId: string;

    @IsOptional()
    @IsString()
    capacityId: string;

}
