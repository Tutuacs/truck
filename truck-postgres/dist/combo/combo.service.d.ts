import { CreateComboDto } from './dto/create-combo.dto';
import { UpdateComboDto } from './dto/update-combo.dto';
import { ComboAbstract } from './functions/combo-abstract';
export declare class ComboService {
    private readonly comboFunctions;
    constructor(comboFunctions: ComboAbstract);
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
