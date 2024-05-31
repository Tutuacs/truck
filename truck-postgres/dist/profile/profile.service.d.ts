import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileAbstract } from './functions/profile-abstract';
import { Role } from 'src/decorators';
export declare class ProfileService {
    private readonly profileFunctions;
    constructor(profileFunctions: ProfileAbstract);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        email: string;
        role: number;
        userId: string;
        image: string;
    }[]>;
    profileInfo(user: {
        id: string;
        userId: string;
    }): any;
    findOne(id: string, user: {
        id: string;
        role: Role;
    }): Promise<{
        id: string;
        email: string;
        role: number;
        userId: string;
        image: string;
    }>;
    update(id: string, data: UpdateProfileDto, user: {
        id: string;
        role: Role;
    }): Promise<{
        id: string;
        email: string;
        password: string;
        role: number;
        image: string;
        userId: string;
    }>;
}
