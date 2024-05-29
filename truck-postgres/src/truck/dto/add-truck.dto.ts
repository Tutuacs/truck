import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class AddTruckDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Truck)
  trucks: Truck[];
}

export class Truck {
  @IsNotEmpty()
  @IsString()
  @MinLength(24, {
    message: 'Id inválido.',
  })
  id: string;
}
