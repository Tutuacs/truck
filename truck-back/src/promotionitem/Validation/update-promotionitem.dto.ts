import { PartialType } from '@nestjs/mapped-types';
import { CreatePromotionitemDto } from './create-promotionitem.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdatePromotionitemDto extends PartialType(CreatePromotionitemDto) {

    @IsOptional()
    @IsString()
    promotionId: string;
}
