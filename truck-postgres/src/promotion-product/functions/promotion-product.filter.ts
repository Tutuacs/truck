import { Injectable } from "@nestjs/common";
import { PromotionProductVerify } from "./promotion-product-exist.filter";
import { PromotionProductAbstract } from "./promotion-product-abstract";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PromotionProductFunctions extends PromotionProductVerify implements PromotionProductAbstract {
    constructor(prisma: PrismaService) {
        super(prisma);
    }
}