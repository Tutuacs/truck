import { Injectable } from '@nestjs/common';
import { CreateComboDto } from './dto/create-combo.dto';
import { UpdateComboDto } from './dto/update-combo.dto';
import { ComboFunctions } from './functions/combo.filter';

@Injectable()
export class ComboService {

  constructor(private readonly comboFunctions: ComboFunctions) {}

  create(data: CreateComboDto) {
    return this.comboFunctions.createCombo(data);
  }

  findAll() {
    return this.comboFunctions.listCombo();
  }

  findOne(id: string) {
    return this.comboFunctions.findCombo(id);
  }

  update(id: string, data: UpdateComboDto) {
    return this.comboFunctions.updateCombo(id, data);
  }

  remove(id: string) {
    return this.comboFunctions.deleteCombo(id);
  }
}
