import { PrismaService } from "src/prisma/prisma.service";

export class UserVerify {
    constructor(protected readonly prisma: PrismaService) { }
    
    exUserId(id: string): Boolean {
        return Boolean(this.prisma.user.count({ where: { id } }));
    }

    exUserEmail(email: string): Boolean {
        return Boolean(this.prisma.user.count({ where: { email } }));
    }

    exUserDocument(document: string): Boolean {
        return Boolean(this.prisma.user.count({ where: { document } }));
    }

}