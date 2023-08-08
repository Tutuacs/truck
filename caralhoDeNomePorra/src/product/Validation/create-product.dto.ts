import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @Type(() => Number)
  @IsNumber({
    allowNaN: false,
  })
  price: number;

  @IsOptional()
  @IsString()
  brandsId: string;

  @IsOptional()
  @IsDate()
  promotionFrom: Date;

  @IsOptional()
  @IsDate()
  promotionTo: Date;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({
    allowNaN: false,
  })
  promotionPrice: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({
    allowNaN: false,
    
  })
  minPromotion: number;

  @IsOptional()
  comboId: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber({
    allowNaN: false,
  })
  minCombo: number;
}