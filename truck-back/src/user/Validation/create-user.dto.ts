import { Profile } from "@prisma/client";
import { IsBoolean, IsEmail, IsEmpty, IsObject, IsOptional, IsString } from "class-validator";

export class CreateUserDto {

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    cpf: string;

    @IsOptional()
    @IsBoolean()
    company: boolean;

    @IsOptional()
    cnpj: string;

    // @IsObject()
    // profile: any;

    // @IsOptional()
    // @IsEmpty({
    //     message: "Você não pode passar este campo: id"
    // })
    // id: string;
}
