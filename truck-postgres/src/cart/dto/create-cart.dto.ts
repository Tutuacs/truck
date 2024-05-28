import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateCartDto {

    @IsOptional()
    @IsNotEmpty()
    userId: string;
    
}
