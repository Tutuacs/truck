import { PromotionProductVerify } from "./promotion-product-exist.filter";
import { PromotionProductAbstract } from "./promotion-product-abstract";
import { CreatePromotionProductDto } from "../dto/create-promotion-product.dto";
import { UpdatePromotionProductDto } from "../dto/update-promotion-product.dto";
export declare class PromotionProductFunctions extends PromotionProductVerify implements PromotionProductAbstract {
    createPromotionProduct(data: CreatePromotionProductDto): import("@prisma/client").Prisma.Prisma__PromotionProductClient<{
        id: string;
        price: number;
        active: boolean;
        productId: string;
        promotionId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findPromotionProduct(id: string): import("@prisma/client").Prisma.Prisma__PromotionProductClient<{
        id: string;
        price: number;
        active: boolean;
        productId: string;
        promotionId: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    listPromotionProduct(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        price: number;
        active: boolean;
        productId: string;
        promotionId: string;
    }[]>;
    updatePromotionProduct(id: string, data: UpdatePromotionProductDto): import("@prisma/client").Prisma.Prisma__PromotionProductClient<{
        id: string;
        price: number;
        active: boolean;
        productId: string;
        promotionId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    removePromotionProduct(id: string): import("@prisma/client").Prisma.Prisma__PromotionProductClient<{
        id: string;
        price: number;
        active: boolean;
        productId: string;
        promotionId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}