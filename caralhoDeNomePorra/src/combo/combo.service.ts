import { Injectable } from '@nestjs/common';
import { CreateComboDto } from './Validation/create-combo.dto';
import { UpdateComboDto } from './Validation/update-combo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ComboService {

  constructor(private readonly prisma:PrismaService) {}

  create(data: CreateComboDto) {
    return this.prisma.createCombo(data);
  }

  findAll() {
    return this.prisma.findAllCombos();
  }

  findOne(id: string) {
    return this.prisma.findUniqCombo(id);
  }

  update(id: string, data: UpdateComboDto) {
    return this.prisma.updateCombo(id,data);
  }

  remove(id: string) {
    return this.prisma.removeCombo(id);
  }
}
