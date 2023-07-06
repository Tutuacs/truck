import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @Type(() => Number)
  @IsNumber()
  price: number;

  @IsOptional()
  brandsId: string;

  @IsOptional()
  @IsDate()
  promotionFrom: Date;

  @IsOptional()
  @IsDate()
  promotionTo: Date;

  @IsOptional()
  promotionPrice: number;

  @IsOptional()
  minPromotion: number;

  @IsOptional()
  comboId: string;

  @IsOptional()
  minCombo: number;
}