import { IsNotEmpty, IsString, IsArray, ValidateNested, IsNumber, IsEmpty, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

class Product {
  @IsString()
  id: string;

  @IsOptional()
  @IsEmpty()
  price: number;

  @Type(() => Number)
  @IsNumber()
  quantity: number;
}

class Combo {
  @IsString()
  id: string;

  @IsString()
  productId: string;

  @IsOptional()
  @IsEmpty()
  price: number;

  @IsOptional()
  @IsEmpty()
  minCombo: number;

  @IsNotEmpty()
  quantity: number;
}

class Order {
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => Product)
  product: Product[];

  @IsOptional()
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => Combo)
  combo: Combo[];
}

export class CreateOrderDto {
  @ValidateNested()
  order: Order;
}
