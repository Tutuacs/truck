import { CreateItemDto, CreateManyItemsDto } from './create-item.dto';
declare const UpdateItemDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateItemDto>>;
export declare class UpdateItemDto extends UpdateItemDto_base {
}
declare const UpdateManyItemDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateManyItemsDto>>;
export declare class UpdateManyItemDto extends UpdateManyItemDto_base {
}
export {};
