import { Prisma, Profile } from "@prisma/client";
import { UpdateProfileDto } from "../dto/update-profile.dto";
import { CreateProfileDto } from "../dto/create-profile.dto";

export abstract class ProfileAbstract {
    abstract createProfile(data: CreateProfileDto): Promise<Profile>;
    abstract findProfile(id: string): Promise<Profile>;
    abstract profileInfo(user: {id: string, userId: string});
    abstract listProfile(): Prisma.PrismaPromise<{
        id: string;
        email: string;
        role: number;
        userId: string;
        image: string;
    }[]>;
    abstract updateProfile(id: string, data: UpdateProfileDto): Promise<Profile>;
    abstract removeProfile(id: string): Promise<Profile>;
}