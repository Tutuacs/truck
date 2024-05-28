import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsSemVer, IsString } from "class-validator";

export class CreatePromotionDto {

    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    promotionFrom: Date;
    
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    promotionTo: Date;

}
