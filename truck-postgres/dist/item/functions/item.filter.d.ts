import { ItemAbstract } from "./item-abstract";
import { CreateItemDto, CreateManyItemsDto } from "../dto/create-item.dto";
import { Item } from "@prisma/client";
import { UpdateItemDto, UpdateManyItemDto } from "../dto/update-item.dto";
import { ItemVerify } from "./item-exist.filter";
export declare class ItemFunctions extends ItemVerify implements ItemAbstract {
    createItem(data: CreateItemDto): Promise<Item>;
    createManyItem(data: CreateManyItemsDto): Promise<Item[]>;
    updateManyItem(data: UpdateManyItemDto): import("@prisma/client").Prisma.PrismaPromise<import("@prisma/client").Prisma.BatchPayload>;
    findItem(id: string): Promise<Item>;
    listItem(): Promise<Item[]>;
    updateItem(id: string, data: UpdateItemDto): Promise<Item>;
    removeItem(id: string): Promise<Item>;
}
