import { IsOptional, IsString } from 'class-validator';

export class CreateCapacityDto {
  @IsString()
  capacity: string;

  @IsOptional()
  @IsString()
  engine: string;
}
