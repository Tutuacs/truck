import { Injectable } from "@nestjs/common";
import { OrderAbstract } from "./order-abstract";
import { OrderVerify } from "./order-exist.filter";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class OrderFunctions extends OrderVerify implements OrderAbstract {
    constructor(prisma: PrismaService){
        super(prisma);
    } 
}