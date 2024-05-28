import { PrismaService } from "src/prisma/prisma.service";
export declare class ComboVerify {
    protected readonly prisma: PrismaService;
    constructor(prisma: PrismaService);
    exComboId(id: string): Promise<boolean>;
    exComboName(name: string): Promise<boolean>;
}
