import { PartialType } from '@nestjs/mapped-types';
import { CreateItemDto, CreateManyItemsDto } from './create-item.dto';

export class UpdateItemDto extends PartialType(CreateItemDto) {}

export class UpdateManyItemDto extends PartialType(CreateManyItemsDto) {
    
}
