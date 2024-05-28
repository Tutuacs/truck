import { Combo } from "@prisma/client";
import { CreateComboDto } from "../dto/create-combo.dto";
import { UpdateComboDto } from "../dto/update-combo.dto";
export declare abstract class ComboAbstract {
    abstract createCombo(data: CreateComboDto): Promise<Combo>;
    abstract findCombo(id: string): Promise<Combo>;
    abstract listCombo(): Promise<Combo[]>;
    abstract updateCombo(id: string, data: UpdateComboDto): Promise<Combo>;
    abstract deleteCombo(id: string): Promise<Combo>;
}
