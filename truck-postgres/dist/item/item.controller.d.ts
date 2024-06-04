import { ItemService } from './item.service';
import { CreateItemDto, CreateManyItemsDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    create(data: CreateItemDto): Promise<{
        id: string;
        price: number;
        active: boolean;
        minCombo: number;
        maxCombo: number;
        productId: string;
        comboId: string;
    }>;
    createMany(data: CreateManyItemsDto): Promise<{
        id: string;
        price: number;
        active: boolean;
        minCombo: number;
        maxCombo: number;
        productId: string;
        comboId: string;
    }[]>;
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
