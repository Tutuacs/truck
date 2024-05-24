import { Item } from "@prisma/client";
import { CreateItemDto } from "../dto/create-item.dto";
import { UpdateItemDto } from "../dto/update-item.dto";

export abstract class ItemAbstract {
    abstract createItem(data: CreateItemDto) : Promise<Item>;
    abstract findItem(id: string) : Promise<Item>;
    abstract listItem(): Promise<Item[]>;
    abstract updateItem(id: string, data: UpdateItemDto): Promise<Item>;
    abstract removeItem(id: string): Promise<Item>;
}