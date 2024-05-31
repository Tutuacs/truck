import { ProfileVerify } from './profile-exist.filter';
import { CreateProfileDto } from '../dto/create-profile.dto';
import { UpdateProfileDto } from '../dto/update-profile.dto';
import { ProfileAbstract } from './profile-abstract';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProfileFunctions extends ProfileVerify implements ProfileAbstract {
    constructor(prisma: PrismaService);
    createProfile(data: CreateProfileDto): import("@prisma/client").Prisma.Prisma__ProfileClient<{
        id: string;
        email: string;
        password: string;
        role: number;
        image: string;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findProfile(id: string): import("@prisma/client").Prisma.Prisma__ProfileClient<{
        id: string;
        email: string;
        password: string;
        role: number;
        image: string;
        userId: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    profileInfo(user: {
        id: string;
        userId: string;
    }): import("@prisma/client").Prisma.Prisma__ProfileClient<{
        id: string;
        email: string;
        role: number;
        image: string;
        User: {
            id: string;
            email: string;
            name: string;
            document: string;
            Trucks: {
                id: string;
                name: string;
            }[];
            Order: {
                id: string;
                total: number;
                date: Date;
                status: number;
                imageId: string;
                userId: string;
            }[];
        };
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    listProfile(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        email: string;
        role: number;
        image: string;
        userId: string;
    }[]>;
    updateProfile(id: string, data: UpdateProfileDto): import("@prisma/client").Prisma.Prisma__ProfileClient<{
        id: string;
        email: string;
        password: string;
        role: number;
        image: string;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    removeProfile(id: string): import("@prisma/client").Prisma.Prisma__ProfileClient<{
        id: string;
        email: string;
        password: string;
        role: number;
        image: string;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    exProfileEmail(email: string): Promise<Boolean>;
}
