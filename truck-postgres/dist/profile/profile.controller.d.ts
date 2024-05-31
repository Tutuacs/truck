import { ProfileService } from './profile.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Role } from 'src/decorators';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
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
