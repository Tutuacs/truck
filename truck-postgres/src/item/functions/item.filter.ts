import { Injectable } from "@nestjs/common";
import { ItemAbstract } from "./item-abstract";
import { CreateItemDto } from "../dto/create-item.dto";
import { Item } from "@prisma/client";
import { UpdateItemDto } from "../dto/update-item.dto";
import { ItemVerify } from "./item-exist.filter";

@Injectable()
export class ItemFunctions extends ItemVerify implements ItemAbstract {

    createItem(data: CreateItemDto): Promise<Item> {
        return this.prisma.item.create({
            data,
        });
    }

    findItem(id: string): Promise<Item> {
        return this.prisma.item.findUnique({
            where: {
                id,
            },
        });
    }

    listItem(): Promise<Item[]> {
        return this.prisma.item.findMany();
    }

    updateItem(id: string, data: UpdateItemDto): Promise<Item> {
        return this.prisma.item.update({
            where: {
                id,
            },
            data,
        });
    }

    removeItem(id: string): Promise<Item> {
        return this.prisma.item.delete({
            where: {
                id,
            },
        });
    }
}