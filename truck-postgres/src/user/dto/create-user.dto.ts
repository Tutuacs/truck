import { IsOptional, IsString } from "class-validator";

export class CreateUserDto {

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    email: string;

    @IsOptional()
    @IsString()
    document: string;
}
