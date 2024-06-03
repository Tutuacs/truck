import { PromotionVerify } from "./promotion-exist.filter";
import { PromotionAbstract } from "./promotion-abstract";
import { CreatePromotionDto } from "../dto/create-promotion.dto";
import { UpdatePromotionDto } from "../dto/update-promotion.dto";
import { PrismaService } from "src/prisma/prisma.service";
export declare class PromotionFunction extends PromotionVerify implements PromotionAbstract {
    constructor(prisma: PrismaService);
    createPromotion(data: CreatePromotionDto): import("@prisma/client").Prisma.Prisma__PromotionClient<{
        id: string;
        name: string;
        promotionFrom: Date;
        promotionTo: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findPromotion(id: string): import("@prisma/client").Prisma.Prisma__PromotionClient<{
        id: string;
        name: string;
        promotionFrom: Date;
        promotionTo: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    listPromotion(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        promotionFrom: Date;
        promotionTo: Date;
    }[]>;
    updatePromotion(id: string, data: UpdatePromotionDto): import("@prisma/client").Prisma.Prisma__PromotionClient<{
        id: string;
        name: string;
        promotionFrom: Date;
        promotionTo: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    removePromotion(id: string): import("@prisma/client").Prisma.Prisma__PromotionClient<{
        id: string;
        name: string;
        promotionFrom: Date;
        promotionTo: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
