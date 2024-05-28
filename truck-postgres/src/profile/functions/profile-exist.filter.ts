import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ProfileVerify {
    constructor(protected readonly prisma: PrismaService) { }

    async exProfileId(id: string): Promise<Boolean> {
        return Boolean(await this.prisma.profile.findUnique({ where: { id } }));
    }

    async exProfileEmail(email: string): Promise<Boolean> {
        return Boolean(await this.prisma.profile.count({ where: { email } }));
    }
}