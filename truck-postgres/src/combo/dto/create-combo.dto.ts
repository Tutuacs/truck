import { IsNotEmpty, IsString } from "class-validator";

export class CreateComboDto {
    
    @IsNotEmpty()
    @IsString()
    name: string;
    
}
