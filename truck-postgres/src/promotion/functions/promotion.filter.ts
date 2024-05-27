import { Injectable } from "@nestjs/common";
import { PromotionVerify } from "./promotion-exist.filter";
import { PrismaService } from "src/prisma/prisma.service";
import { PromotionAbstract } from "./promotion-abstract";

@Injectable()
export class PromotionFunction extends PromotionVerify implements PromotionAbstract {
  constructor(prisma: PrismaService) {
    super(prisma);
  }

}