import { Profile } from "@prisma/client";
import { UpdateProfileDto } from "../dto/update-profile.dto";
import { CreateProfileDto } from "../dto/create-profile.dto";
export declare abstract class ProfileAbstract {
    abstract createProfile(data: CreateProfileDto): Promise<Profile>;
    abstract findProfile(id: string): Promise<Profile>;
    abstract listProfile(): Promise<Profile[]>;
    abstract updateProfile(id: string, data: UpdateProfileDto): Promise<Profile>;
    abstract removeProfile(id: string): Promise<Profile>;
}
