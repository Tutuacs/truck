import { Injectable } from "@nestjs/common";
import { PromotionProductVerify } from "./promotion-product-exist.filter";
import { PromotionProductAbstract } from "./promotion-product-abstract";
import { CreatePromotionProductDto } from "../dto/create-promotion-product.dto";
import { UpdatePromotionProductDto } from "../dto/update-promotion-product.dto";

@Injectable()
export class PromotionProductFunctions extends PromotionProductVerify implements PromotionProductAbstract {
    createPromotionProduct(data: CreatePromotionProductDto) {
        return this.prisma.promotionProduct.create({ data });
    }

    findPromotionProduct(id: string) {
        return this.prisma.promotionProduct.findUnique({ where: { id } });
    }

    listPromotionProduct() {
        return this.prisma.promotionProduct.findMany();
    }

    updatePromotionProduct(id: string, data: UpdatePromotionProductDto) {
        return this.prisma.promotionProduct.update({ where: { id }, data });
    }

    removePromotionProduct(id: string) {
        return this.prisma.promotionProduct.delete({ where: { id } });
    }
}