import { PrismaService } from "src/prisma/prisma.service";
export declare class UserVerify {
    protected readonly prisma: PrismaService;
    constructor(prisma: PrismaService);
    exUserId(id: string): Boolean;
    exUserEmail(email: string): Boolean;
    exUserDocument(document: string): Boolean;
}
