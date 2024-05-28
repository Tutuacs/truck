import { UserVerify } from "./user-exist.filter";
import { UserAbstract } from "./user-abstract";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
export declare class UserFunctions extends UserVerify implements UserAbstract {
    constructor(prisma: PrismaService);
    createUser(data: CreateUserDto): import("@prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        document: string;
        verifiedEmail: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findUser(id: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        document: string;
        verifiedEmail: boolean;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    listUser(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        email: string;
        document: string;
        verifiedEmail: boolean;
    }[]>;
    updateUser(id: string, data: UpdateUserDto): import("@prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        document: string;
        verifiedEmail: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    removeUser(id: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        email: string;
        document: string;
        verifiedEmail: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
