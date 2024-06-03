import { Type } from "class-transformer";
import { IsDate, IsDateString, IsISO8601, IsNotEmpty, IsSemVer, IsString, isISO8601 } from "class-validator";

export class CreatePromotionDto {

    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    // @IsISO8601()
    promotionFrom: Date;
    
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    // @IsISO8601()
    promotionTo: Date;

}
