import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemAbstract } from './functions/item-abstract';
export declare class ItemService {
    private readonly itemFunctions;
    constructor(itemFunctions: ItemAbstract);
    create(data: CreateItemDto): Promise<{
        id: string;
        price: number;
        active: boolean;
        minCombo: number;
        maxCombo: number;
        productId: string;
        comboId: string;
    }>;
    findAll(): Promise<{
        id: string;
        price: number;
        active: boolean;
        minCombo: number;
        maxCombo: number;
        productId: string;
        comboId: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        price: number;
        active: boolean;
        minCombo: number;
        maxCombo: number;
        productId: string;
        comboId: string;
    }>;
    update(id: string, data: UpdateItemDto): Promise<{
        id: string;
        price: number;
        active: boolean;
        minCombo: number;
        maxCombo: number;
        productId: string;
        comboId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        price: number;
        active: boolean;
        minCombo: number;
        maxCombo: number;
        productId: string;
        comboId: string;
    }>;
}
