import { User } from "@prisma/client";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
export declare abstract class UserAbstract {
    abstract createUser(data: CreateUserDto): Promise<User>;
    abstract findUser(id: string): Promise<User>;
    abstract findByProfile(id: string): Promise<User>;
    abstract listUser(): Promise<User[]>;
    abstract updateUser(id: string, data: UpdateUserDto): Promise<User>;
    abstract removeUser(id: string): Promise<User>;
}
