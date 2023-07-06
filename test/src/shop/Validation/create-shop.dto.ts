import { IsOptional, IsString } from "class-validator";

export class CreateShopDto {

    @IsOptional()
    @IsString()
    cartId: string;
}
