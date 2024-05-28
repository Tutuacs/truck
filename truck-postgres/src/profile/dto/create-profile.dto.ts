import { IsEmail, IsEmpty, IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";

export class CreateProfileDto {

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsStrongPassword({
        minLength: 3,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,        
    })
    password: string;

    @IsOptional()
    @IsString()
    image: string;

    @IsOptional()
    @IsEmpty()
    userId:string;

}
