import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTruckDto {
  @IsString()
  brand: string;

  @Type(() => Number)
  @IsNumber({
    allowNaN:false,
  })
  pound: number;

  @IsOptional()
  @IsString()
  image: string;

  @IsString()
  year:string;

  @IsOptional()
  @IsString()
  modelImage: string;

  @IsString()
  capacity: string;

  @IsOptional()
  @IsString()
  engine: string;

}
