import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTruckDto {
  @IsOptional()
  @IsString()
  image: string;

  @Type(() => Number)
  @IsNumber({
    allowNaN: false,
  })
  pound: number;

  @IsString()
  brand: string;

  @IsOptional()
  @IsString()
  modelImage: string;

  @IsOptional()
  @IsString()
  year: string;

  @IsOptional()
  capacity: string;

  @IsOptional()
  engine: string;
}
