import { Injectable } from "@nestjs/common";
import { ProfileVerify } from "./profile-exist.filter";
import { CreateProfileDto } from "../dto/create-profile.dto";
import { UpdateProfileDto } from "../dto/update-profile.dto";
import { ProfileAbstract } from "./profile-abstract";

@Injectable()
export class ProfileFunctions extends ProfileVerify implements ProfileAbstract {
    createProfile(data: CreateProfileDto) {
        return this.prisma.profile.create({ data });
    }

    findProfile(id: string) {
        return this.prisma.profile.findUnique({ where: { id } });
    }

    listProfile() {
        return this.prisma.profile.findMany();
    }

    updateProfile(id: string, data: UpdateProfileDto) {
        return this.prisma.profile.update({ where: { id }, data });
    }

    removeProfile(id: string) {
        return this.prisma.profile.delete({ where: { id } });
    }

    async exProfileEmail(email: string): Promise<Boolean> {
        return Boolean(await this.prisma.profile.count({ where: { email } }));
    }
}