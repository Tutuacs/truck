import { IsOptional, IsString } from 'class-validator';

export class CreateModelDto {
  @IsOptional()
  @IsString()
  image: string;

  @IsString()
  year: string;

  @IsOptional()
  @IsString()
  capacityId: string;
}
