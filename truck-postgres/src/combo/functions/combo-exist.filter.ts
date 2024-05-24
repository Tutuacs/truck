import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ComboVerify {
    constructor(protected readonly prisma: PrismaService) {}

    async exComboId(id: string): Promise<boolean> {
        return Boolean(await this.prisma.combo.count({ where: { id } }));
    }

    async exComboName(name: string): Promise<boolean> {
        return Boolean(await this.prisma.combo.count({ where: { name } }));
    }
}