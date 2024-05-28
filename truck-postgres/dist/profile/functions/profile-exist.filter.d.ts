import { PrismaService } from "src/prisma/prisma.service";
export declare class ProfileVerify {
    protected readonly prisma: PrismaService;
    constructor(prisma: PrismaService);
    exProfileId(id: string): Promise<Boolean>;
    exProfileEmail(email: string): Promise<Boolean>;
}
