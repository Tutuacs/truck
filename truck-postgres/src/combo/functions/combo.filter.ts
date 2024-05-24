import { Injectable } from "@nestjs/common";
import { ComboVerify } from "./combo-exist.filter";
import { ComboAbstract } from "./combo-abstract";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateComboDto } from "../dto/create-combo.dto";
import { Combo } from "@prisma/client";
import { UpdateComboDto } from "../dto/update-combo.dto";

@Injectable()
export class ComboFunctions extends ComboVerify implements ComboAbstract {
    constructor(prisma: PrismaService) {
        super(prisma);
    }

    createCombo(data: CreateComboDto): Promise<Combo> {
        return this.prisma.combo.create({
            data,
        });
    }

    findCombo(id: string): Promise<Combo> {
        return this.prisma.combo.findUnique({
            where: {
                id,
            },
        });
    }

    listCombo(): Promise<Combo[]> {
        return this.prisma.combo.findMany();
    }

    updateCombo(id: string, data: UpdateComboDto): Promise<Combo> {
        return this.prisma.combo.update({
            where: {
                id,
            },
            data,
        });
    }

    deleteCombo(id: string): Promise<Combo> {
        return this.prisma.combo.delete({
            where: {
                id,
            },
        });
    }
}