import { ComboVerify } from "./combo-exist.filter";
import { ComboAbstract } from "./combo-abstract";
import { CreateComboDto } from "../dto/create-combo.dto";
import { Combo } from "@prisma/client";
import { UpdateComboDto } from "../dto/update-combo.dto";
export declare class ComboFunctions extends ComboVerify implements ComboAbstract {
    createCombo(data: CreateComboDto): Promise<Combo>;
    findCombo(id: string): Promise<Combo>;
    listCombo(): Promise<Combo[]>;
    updateCombo(id: string, data: UpdateComboDto): Promise<Combo>;
    deleteCombo(id: string): Promise<Combo>;
}
