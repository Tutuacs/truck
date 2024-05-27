import { PrismaService } from "src/prisma/prisma.service";
import { ProductVerify } from "./product-exist.filter";
import { ProductAbstract } from "./product-abstract";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductFunction extends ProductVerify implements ProductAbstract {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}