import { IsEmail, IsEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";

export class CreateProfileDto {

    @IsEmail()
    email: string;

    @IsStrongPassword({
        minLength:3,
        minLowercase: 0,
        minNumbers: 0,
        minSymbols: 0,
        minUppercase: 0,
    })
    password: string;

    @IsOptional()
    @IsEmpty()
    userId:string;

}
