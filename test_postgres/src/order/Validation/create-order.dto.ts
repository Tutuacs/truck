import { Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

class ProductItemDto {
  @IsString()
  id: string;

  @IsNumber()
  quantity: number;
}

export class CreateOrderDto {

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductItemDto)
  products: ProductItemDto[];

}
