import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateComboDto {
    
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsBoolean()
    active: boolean;
    
}
