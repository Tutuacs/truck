import { Injectable } from "@nestjs/common";
import { ItemAbstract } from "./item-abstract";
import { CreateItemDto, CreateManyItemsDto } from "../dto/create-item.dto";
import { Item } from "@prisma/client";
import { UpdateItemDto, UpdateManyItemDto } from "../dto/update-item.dto";
import { ItemVerify } from "./item-exist.filter";

@Injectable()
export class ItemFunctions extends ItemVerify implements ItemAbstract {

    createItem(data: CreateItemDto): Promise<Item> {
        return this.prisma.item.create({
            data,
        });
    }

    createManyItem(data: CreateManyItemsDto): Promise<Item[]> {
        return this.prisma.item.createManyAndReturn({
            data: data.items
        });
    }

    updateManyItem(data: UpdateManyItemDto) {
        return this.prisma.item.updateMany({
            where:{
                id: {
                    in: data.items.map(item => item.id)
                },
            },
            data: data.items
        })
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