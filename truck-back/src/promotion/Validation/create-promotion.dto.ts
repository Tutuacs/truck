import { IsString } from "class-validator";

export class CreatePromotionDto {

    @IsString()
    promotionItemId: string;
}
