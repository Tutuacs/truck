import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class AddRelationDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RelationId)
  relation: RelationId[];
}

export class RelationId {
  @IsNotEmpty()
  @IsString()
  @MinLength(24, {
    message: 'Id inválido.',
  })
  id: string;
}
