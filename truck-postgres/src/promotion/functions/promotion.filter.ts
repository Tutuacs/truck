import { Injectable } from "@nestjs/common";
import { PromotionVerify } from "./promotion-exist.filter";
import { PromotionAbstract } from "./promotion-abstract";
import { CreatePromotionDto } from "../dto/create-promotion.dto";
import { UpdatePromotionDto } from "../dto/update-promotion.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PromotionFunction extends PromotionVerify implements PromotionAbstract {

    constructor(prisma: PrismaService) {
        super(prisma);
    }

    createPromotion(data: CreatePromotionDto) {
        return this.prisma.promotion.create({ data });
    }

    findPromotion(id: string) {
        return this.prisma.promotion.findUnique({ where: { id } });
    }

    listPromotion() {
        return this.prisma.promotion.findMany();
    }

    updatePromotion(id: string, data: UpdatePromotionDto) {
        return this.prisma.promotion.update({ where: { id }, data });
    }

    removePromotion(id: string) {
        return this.prisma.promotion.delete({ where: { id } });
    }

}