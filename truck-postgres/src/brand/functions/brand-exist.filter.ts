import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class BrandVerify {
    constructor(private readonly prisma: PrismaService) {}

    async exBrandId(id: string): Promise<boolean> {
        return Boolean(await this.prisma.brands.count({where: {id}}));
    }

    async exBrandName(name: string): Promise<boolean> {
        return Boolean(await this.prisma.brands.count({where: {name}}));
    }

}