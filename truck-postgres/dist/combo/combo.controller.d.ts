import { ComboService } from './combo.service';
import { CreateComboDto } from './dto/create-combo.dto';
import { UpdateComboDto } from './dto/update-combo.dto';
export declare class ComboController {
    private readonly comboService;
    constructor(comboService: ComboService);
    create(data: CreateComboDto): Promise<{
        id: string;
        name: string;
        active: boolean;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        active: boolean;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        active: boolean;
    }>;
    update(id: string, data: UpdateComboDto): Promise<{
        id: string;
        name: string;
        active: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        active: boolean;
    }>;
}
