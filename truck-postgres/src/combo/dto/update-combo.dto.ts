import { PartialType } from '@nestjs/mapped-types';
import { CreateComboDto } from './create-combo.dto';
import { IsBoolean, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateComboDto extends PartialType(CreateComboDto) {

    @IsOptional()
    @Type(() => Boolean)
    @IsBoolean()
    active: boolean;
    
}
