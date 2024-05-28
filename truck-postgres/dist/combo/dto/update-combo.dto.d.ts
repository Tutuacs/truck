import { CreateComboDto } from './create-combo.dto';
declare const UpdateComboDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateComboDto>>;
export declare class UpdateComboDto extends UpdateComboDto_base {
    active: boolean;
}
export {};
