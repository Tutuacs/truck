import { IsDate, IsString } from "class-validator";

export class CreatePromotionDto {

    @IsDate()
    dateFrom: Date;

    @IsDate()
    dateTo: Date;

    @IsString()
    itemId: string;
}
